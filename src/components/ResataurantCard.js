import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log({props})
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: {slaString},
  } = resData?.data?.info;

  return (
    <div className="w-[340px] border border-[#00000026] rounded-2xl shadow-[#00000026] res-card">
      <div className="flex res-image-box h-[300px]">
        <img
          className="w-full rounded-t-2xl res-img"
          alt="restaurant-image"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="flex flex-col h-fit p-5 gap-2 res-details">
        <div className="flex justify-between align-top res-details-top">
          <h3 className="text-base font-bold">{name}</h3>
          <div className="flex h-fit bg-[#e8e8e8] rounded-full py-[5px] px-[6px] rating-icon">
            <p className="text-sm">{avgRating}</p>
          </div>
        </div>
        <div className="res-details-bottom">
          <p>Delivery Time: {slaString}</p>
        </div>
      </div>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-black text-sm m-2 px-2 py-1 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;