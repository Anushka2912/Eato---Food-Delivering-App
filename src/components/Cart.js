import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="h-screen mainContainer">
            {cartItems.length === 0 
                ? 
                <div className="h-screen flex flex-col justify-center place-items-center">
                    <img src="https://i.ibb.co/DKz2yTZ/empty-cart.png" alt="empty-cart" className="w-[280px] mb-8"></img>
                    <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                    <p className="text-sm text-gray-500 mb-2">You can go to home page to view more restaurants</p>
                    <Link to="/home"><button className="mt-4 bg-black border border-black rounded-full text-white py-1 px-4 hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300 errBtn global-btn">Go back to homepage</button></Link>
                </div> 
                :
                <div className="flex flex-col gap-14 w-8/12 m-auto p-12 cartContainer">
                    <div className="flex justify-center items-center headingContainer">
                        <h2 className="text-4xl font-bold">Cart</h2>
                    </div>
                    {cartItems.map((item) => (
                        <div className="cartDetails" key={item?.card?.info?.id}>
                            <div className="flex justify-between gap-8 place-items-center">
                                <div>
                                    <h3 className="text-lg font-bold">{item?.card?.info?.name}</h3>
                                    <p className="font-bold">Rs {item?.card?.info?.price
                                        ? item?.card?.info?.price/100
                                        : item?.card?.info?.defaultPrice/100
                                        }
                                    </p>
                                </div>
                                <div>
                                    <div className="relative">
                                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-[150px]"></img>        
                                    </div>
                                </div>
                            </div>    
                        </div>
                    ))}
                    <div>
                        <button className="px-8 py-1 bg-black border-black rounded-[50px] text-white"
                        onClick={handleClearCart}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartComponent;