import { useState } from "react";
import ItemList from "./ItemList";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

const RestaurantCategory = ({data , showItems, setShowIndex}) => {
    //const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="w-9/12 m-auto accordionContainer">
            <div className="flex justify-between bg-slate-100 shadow-lg p-4 cursor-pointer accordionHeader" onClick={handleClick}>
                <p className="text-xl font-bold">{data.title} ({data.itemCards.length})</p>
                <span><ChevronDownIcon className="w-5 h-5 inline-block" /></span>
            </div>
            <div className="p-3 accordionBody">
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;