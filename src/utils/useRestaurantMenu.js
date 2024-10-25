import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
    
const useRestaurantMenu = (resId) => {
    const [resMenuInfo, setMenuInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(MENU_API + resId);
        const data = await response.json();
        
        setMenuInfo(data);
        console.log(data);
    };
    return resMenuInfo;
}

export default useRestaurantMenu;