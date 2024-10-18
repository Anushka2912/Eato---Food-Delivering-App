/*import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name cuisines, costForTwoMessage } =
        resInfo?...................
    
    const { itemCards } =
        resInfo?...................
    
    console.log(itemCards);

    return (
        <div className="ResMenuContainer">
            <h2>{name}</h2>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={id}>
                        {dish name} = {" $ "}
                        {dish price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;*/