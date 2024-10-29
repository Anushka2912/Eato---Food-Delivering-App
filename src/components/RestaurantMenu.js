import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resMenuInfo = useRestaurantMenu(resId);

    console.log({resMenuInfo});
    
    const text = resMenuInfo?.data?.cards?.[0]?.card?.card?.text;

    const title = resMenuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.title;

    const itemCards = resMenuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

    const categories = resMenuInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log( {categories} );

    return resMenuInfo === null ? (
        <Shimmer />
    ) : (
        <div className="mainContainer">
            <div className="RestaurantHeader flex justify-center items-center bg-slate-300 min-h-96">
                <h2 className="text-4xl font-bold p-5">{text}</h2>
            </div> 
            <div className="RestaurantMenu w-full flex px-9 py-20 m-auto">
                <div className="accordianContainer w-fit max-w-[1500px] m-auto">
                    {categories.map((cat, index) => (
                        <RestaurantCategory key={index} data={cat.card?.card}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;