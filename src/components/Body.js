import { useEffect, useState } from "react";
import RestaurantCard from "./ResataurantCard";
import SearchContainer from "./Search";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await fetch("https://run.mocky.io/v3/8f7ba24c-d000-40a8-95ae-c9cc59fe0bdd");

    const json = await list.json();
    
    const normalizedData = json.data.map((restaurant) => ({
        type: "restaurant",
        data: restaurant
      }));
      
    setListOfRestaurants(normalizedData);
    setAllRestaurants(normalizedData);
  };

  return (
    <div className="bodyContainer">
        <SearchContainer allRestaurants={allRestaurants} setListOfRestaurants={setListOfRestaurants} />
        <div className="filtersContainer">
            <button
            className="all-filter-btn global-btn"
            onClick={() => {
                setListOfRestaurants(allRestaurants);
            }}
            >
            All
            </button>
            <button
            className="top-filter-btn global-btn"
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (restaurant) => restaurant.data.rating > 4 
                );
                setListOfRestaurants(filteredList);
            }}
            >
            Top Rated Restaurants
            </button>
        </div>
        <div className="restaurantContainer">
          {listOfRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))
        )}
        </div>
    </div>
  );
};

export default BodyComponent;