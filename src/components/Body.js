import searchIcon from '../images/search-icon.jpg';
import resList from '../utils/mockData';
import RestaurantCard from './ResataurantCard';

const BodyComponent = () => {
    return (
        <div className="bodyContainer">
            <div className="searchContainer">
                <button className="search-btn"><img src={searchIcon} alt="search-icon-image" className="search-icon" /></button>
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search..." 
                />
            </div>
            <div className="restaurantContainer">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;