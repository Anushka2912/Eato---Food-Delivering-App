import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const CartComponent = () => {
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="h-screen mainContainer">
            {cartItems.length === 0 ? <div className="h-screen flex justify-center place-items-center text-3xl font-bold">No items in cart</div> :
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
                        <button className="px-8 py-1 bg-black border-black rounded-[50px] text-white">Clear Cart</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartComponent;