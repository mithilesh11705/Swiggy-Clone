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
  const [dataresto, setdataresto] = useState([]);

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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
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
      <div className="filter flex items-center">
        <div className="m-4 p-5 ">
          <input
            type="text"
            className="search-box  border-solid border to-black p-3 rounded-lg"
            placeholder="Search for Food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 py-4 rounded-lg"
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

        <div>
          <button
            className="px-4 bg-gray-100 m-4 py-4 rounded-lg"
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
      </div>
      <div className="flex flex-wrap p-4 ">
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
