import { useEffect, useState } from "react";
import RestaurantCard, {withOpenLabel} from "./ResataurantCard";
import SearchContainer from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const RestaurantOpenCard = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'));
    if (list.ok) {
      
      const json = await list.json();
      const normalizedData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurant) => ({
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
    <div className="p-10 h-auto w-full max-w-[2100px] m-auto mainContainer">
      <div className="flex flex-col gap-8 p-10 bodyContainer">
        <div className="flex justify-between gap-2 mb-6">
          <div className="flex w-fit justify-between gap-2 filtersContainer">
            <button
              className="all-filter-btn bg-black border border-black rounded-full text-white py-[8px] px-[30px] hover:bg-transparent hover:text-black hover:border-black"
              onClick={() => {
                setListOfRestaurants(allRestaurants);
              }}
            >
            All
            </button>
            <button
              className="top-filter-btn bg-black border border-black rounded-full text-white py-[8px] px-[30px] hover:bg-transparent hover:text-black hover:border-black"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (restaurant) => restaurant.data.info.avgRating > 4.5 
                );
                setListOfRestaurants(filteredList);
              }}
            >
            Top Rated Restaurants
            </button>
          </div>
          <SearchContainer allRestaurants={allRestaurants} setListOfRestaurants={setListOfRestaurants} />
        </div>
        <div className="w-full flex flex-wrap justify-between gap-y-9 gap-x-9 restaurantContainer">
            {listOfRestaurants.length === 0 ? (
              <Shimmer />
            ) : (
            listOfRestaurants.map((restaurant, index) => (
              <Link key={restaurant.data.info.id || index} to={"restaurants/" + restaurant.data.info.id} className="w-fit">
                {
                  restaurant.data.info.isOpen == true ? (<RestaurantOpenCard resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
                }
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;