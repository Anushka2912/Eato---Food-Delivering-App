import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./ResataurantCard";
import SearchContainer from "./Search";

const BodyComponent = () => {
  const [topRestaurants, setTopRestaurants] = useState(resList);

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
      
    setTopRestaurants(normalizedData);
  };

  return (
    <div className="bodyContainer">
        <SearchContainer />
        <div className="filtersContainer">
            <button
            className="all-filter-btn global-btn"
            onClick={() => {
                setTopRestaurants(resList);
            }}
            >
            All
            </button>
            <button
            className="top-filter-btn global-btn"
            onClick={() => {
                const filteredList = resList.filter(
                    (restaurant) => restaurant.data.rating > 4 
                );
                setTopRestaurants(filteredList);
            }}
            >
            Top Rated Restaurants
            </button>
        </div>
        <div className="restaurantContainer">{
            topRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))
        }
        </div>
    </div>
  );
};

export default BodyComponent;