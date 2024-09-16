import searchIcon from "../images/search-icon.jpg";
import { useState } from "react";

const SearchContainer = ({allRestaurants, setListOfRestaurants}) => {

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setListOfRestaurants(allRestaurants);
    } else {
      const searchList = allRestaurants.filter((result) => 
        result.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestaurants(searchList);
    }
  }

  return (
    <div className="search-Box">
      <button className="search-btn" onClick={handleSearch}>
        <img src={searchIcon} alt="search-icon-image" className="search-icon" />
      </button>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search..." 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
};

export default SearchContainer;