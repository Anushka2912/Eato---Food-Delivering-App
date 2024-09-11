import searchIcon from "../images/search-icon.jpg";

const SearchContainer = () => {
    return (
        <div className="searchContainer">
    <button className="search-btn">
      <img src={searchIcon} alt="search-icon-image" className="search-icon" />
    </button>
    <input type="text" className="search-input" placeholder="Search..." />
  </div>
    )
};

export default SearchContainer;