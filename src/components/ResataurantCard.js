const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <div className="res-image-box">
        <img
          className="res-img"
          alt="restaurant-image"
          src={resData.data.image}
        />
      </div>
      <div className="res-details">
        <div className="res-details-top">
          <h3>{resData.data.name}</h3>
          <div className="rating-icon">
            <p>{resData.data.rating}</p>
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