import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log({cartItems});
    
    return(
        <div className="h-screen mainContainer">
            <div className="cartContainer">
                <div className="headingContainer">
                    <h2 className="text-4xl font-bold">Cart</h2>
                </div>
                <div className="cartDetails">
                    <div>
                        <div>
                            <h3>Name and Price</h3>
                        </div>
                        <div>
                            <img></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;