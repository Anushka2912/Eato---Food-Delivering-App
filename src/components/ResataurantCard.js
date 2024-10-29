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
    <div className="w-full border border-[#00000026] rounded-2xl shadow-[#00000026] res-card">
      <div className="flex res-image-box h-[200px]">
        <img
          className="w-full rounded-t-2xl res-img"
          alt="restaurant-image"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-5 res-details">
        <div className="flex justify-between items-center res-details-top">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="bg-[#e8e8e8] rounded-full py-1 px-2 rating-icon">
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

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;