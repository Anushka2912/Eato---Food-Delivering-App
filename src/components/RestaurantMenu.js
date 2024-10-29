import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resMenuInfo = useRestaurantMenu(resId);


    console.log({resMenuInfo});
    return resMenuInfo === null ? (
        <Shimmer />
    ) : (
        <div className="mainContainer">
            <div className="RestaurantHeader flex justify-center items-center bg-slate-300 min-h-96">
                <h2 className="text-4xl font-bold p-5">{resMenuInfo.data.cards[0].card.card.text}</h2>
            </div> 
            <div className="RestaurantMenu w-full flex px-9 py-20 m-auto">
                <div className="RestaurantMenuContainer w-fit max-w-[1500px] m-auto border border-[#00000026]">
                    <h3 className="bg-red-600 text-white text-2xl font-semibold p-5 mb-5">{resMenuInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title}</h3>
                    <ul className="flex flex-col justify-center gap-y-11 gap-x-11 p-5">
                        {resMenuInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((item) => (
                            <li key={item.card.info.id} className="flex place gap-10 align-top menuListItem">
                                <div className="flex flex-col gap-y-4 w-3/5">
                                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.card.info.imageId} className="w-full max-w-[200px]"></img>
                                    <h4 className="text-xl font-semibold">{item.card.info.name}</h4>
                                    <p>{item.card.info.description}</p>
                                </div>
                                <div className="w-2/5 text-right">
                                    <p>Rs {item.card.info.price / 100}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;