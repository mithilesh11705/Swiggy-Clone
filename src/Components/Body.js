import RestoCards from "./RestoCards";
import DataList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestoData from "../Utils/useRestoData";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {

  const [searchText, setSearchText] = useState("");
 // const data = useRestoData();
  const [dataresto, setdataresto] = useState([] );

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
    const onlineStatus=useOnlineStatus();
    if(onlineStatus ===false)
    {
      return(
        <div>
          <h1>No Internet Connection</h1>
          <p>Please check your internet connection and try again.</p>
        </div>
      );
    }
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
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = dataresto.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setdataresto(filteredList);
          }}
        >
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
          <Link
            className="link"
            key={restro.info.id}
            to={"/restaurants/" + restro.info.id}
          >
            <RestoCards resdata={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
