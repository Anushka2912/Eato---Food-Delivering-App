import { useEffect, useState } from "react";
import RestaurantCard from "./ResataurantCard";
import SearchContainer from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await fetch("https://run.mocky.io/v3/db194f20-d556-431f-90fb-a12040902470");
    if (list.ok) {
      
      const json = await list.json();
      const normalizedData = json.restaurants.map((restaurant) => ({
          type: "restaurant",
          data: restaurant
        }));
        
      setListOfRestaurants(normalizedData);
      setAllRestaurants(normalizedData);
    }
    else {
      // TODO: Add error handling - show no restaurants UI
      console.log("There's no data!!!")
    }
  };

  return (
    <div className="h-screen p-10 mainContainer">
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
        <div className="flex flex-wrap justify-between gap-y-9 gap-x-9 restaurantContainer">
            {listOfRestaurants.length === 0 ? (
              <Shimmer />
            ) : (
            listOfRestaurants.map((restaurant) => (
              <Link key={restaurant.data.id} to={"restaurants/" + restaurant.data.id}>
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;