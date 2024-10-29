import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
    
const useRestaurantMenu = (resId) => {
    const [resMenuInfo, setMenuInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4434646&lng=78.3771953&catalog_qa=undefined&submitAction=ENTER&restaurantId="+resId));
        const data = await response.json();
        setMenuInfo(data);
    };
    return resMenuInfo;
}

export default useRestaurantMenu;