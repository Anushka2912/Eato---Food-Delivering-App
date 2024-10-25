import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resMenuInfo = useRestaurantMenu(resId);

    return resMenuInfo === null ? (
        <Shimmer />
    ) : (
        <div className="h-screen p-10 mainContainer">
            <div className="ResMenuContainer">
                <h2 className="text-4xl pb-4">{resMenuInfo?.name}</h2>
                <h3>Menu</h3>
                <ul className="flex gap-y-9 gap-x-9">
                    {resMenuInfo?.menu_items?.map((item) => (
                        <li key={item.menu_id} className="flex flex-col justify-center place-items-center gap-4 menuListItem">
                            <img src={item.menu_image_url} className="w-full max-w-[200px]"></img>
                            <h4>{item.menu_name}</h4>
                            <p>{item.menu_description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;