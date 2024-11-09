import { useState } from "react";

const SearchContainer = ({allRestaurants, setListOfRestaurants}) => {

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log({searchText, allRestaurants});
    if (searchText.trim() === "") {
      setListOfRestaurants(allRestaurants);
    } else {
      const searchList = allRestaurants.filter((result) => {
        console.log({result});
        const name = result?.data?.info?.name || "";
        return name.toLowerCase().includes(searchText.toLowerCase());
      });
      setListOfRestaurants(searchList);
    }
  }

  return (
    <div className="flex justify-center items-center w-full max-w-[580px] bg-white border border-black rounded-full search-Box">
      <button className="bg-white border-0 search-btn" onClick={handleSearch}>
        <img src="https://i.ibb.co/Qm4mtYb/search-icon.jpg" alt="search-icon-image" className="max-w-[15px]" />
      </button>
      <input 
        type="text" 
        className="w-full max-w-[500px] p-3 rounded-full border-0 focus:outline-none search-input" 
        placeholder="Search..." 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  )
};

export default SearchContainer;