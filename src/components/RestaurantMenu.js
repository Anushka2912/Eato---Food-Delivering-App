import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resMenuInfo = useRestaurantMenu(resId);
    
    const [showIndex, setShowIndex] = useState(null);

    const handleToggle = (index) => {
        setShowIndex(showIndex === index ? null : index);
    }

    const text = resMenuInfo?.data?.cards?.[0]?.card?.card?.text;

    const categories = resMenuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); 

    return resMenuInfo === null ? (
        <Shimmer />
    ) : (
        <div className="mainContainer">
            <div className="RestaurantHeader flex flex-col justify-center items-center bg-slate-200 min-h-96">
                <h2 className="text-4xl font-bold p-5">{text}</h2>
                <p className="text-xl font-bold">{resMenuInfo?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</p>
            </div>
            <div className="text-lg font-bold text-center px-9 pt-9">
                Menu
            </div> 
            <div className="RestaurantMenu w-full flex px-9 py-9 m-auto">
                <div className="categoryContainer w-full max-w-[1500px] m-auto">
                    {categories.map((cat, index) => (
                        <RestaurantCategory 
                            key = {index} 
                            data = {cat.card?.card}
                            showItems = {index === showIndex ? true : false}
                            setShowIndex = {() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;