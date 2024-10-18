const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="w-full max-w-[280px] border border-[#00000026] rounded-2xl shadow-[#00000026] res-card">
      <div className="flex res-image-box">
        <img
          className="w-full rounded-t-2xl res-img"
          alt="restaurant-image"
          src={resData.data.image}
        />
      </div>
      <div className="p-5 res-details">
        <div className="flex justify-between items-center res-details-top">
          <h3 className="text-lg font-bold">{resData.data.name}</h3>
          <div className="bg-[#e8e8e8] rounded-full py-1 px-2 rating-icon">
            <p className="text-sm">{resData.data.rating}</p>
          </div>
        </div>
        <div className="res-details-bottom">
          <p>{resData.data.delivery_time}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;