import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log({items})
    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="flex align-top gap-8 border-b-2 pt-6 pb-6">
                    <div className="w-2/4 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <span></span>
                            <span className="text-lg font-bold">{item?.card?.info?.name}</span>
                            <span className="font-bold">Rs {item?.card?.info?.price /100}</span>
                        </div>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/4 place-items-end">
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-[200px]"></img>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;