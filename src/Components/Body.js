import RestoCards from "./RestoCards";
import DataList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [dataresto, setdataresto] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9811778&lng=73.7791658&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setdataresto(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //Conditional Rendering

  return dataresto.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search for Food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={() => {}}>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = dataresto.filter(
              (res) => res.info.avgRatingString > 4.3
            );
            setdataresto(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {dataresto.map((restro) => (
          <RestoCards key={restro.info.id} resdata={restro} />
        ))}
      </div>
    </div>
  );
};

export default Body;
