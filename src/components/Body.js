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
    const list = await fetch("https://l3rrj.wiremockapi.cloud/");

    const json = await list.json();
    
    const normalizedData = json.data.map((restaurant) => ({
        type: "restaurant",
        data: restaurant
      }));
      
    setListOfRestaurants(normalizedData);
    setAllRestaurants(normalizedData);
  };

  return (
    <div className="h-screen mainContainer">
      <div className="flex flex-col gap-8 p-10 bodyContainer">
        <SearchContainer allRestaurants={allRestaurants} setListOfRestaurants={setListOfRestaurants} />
        <div className="flex justify-end gap-2 filtersContainer">
            <button
            className="all-filter-btn bg-black border border-black rounded-full text-white py-1 px-4 hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300"
            onClick={() => {
                setListOfRestaurants(allRestaurants);
            }}
            >
            All
            </button>
            <button
            className="top-filter-btn bg-black border border-black rounded-full text-white py-1 px-4 hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300"
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
        <div className="flex flex-wrap justify-between row-gap-12 restaurantContainer">
            {listOfRestaurants.length === 0 ? (
              <Shimmer />
            ) : (
            listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;