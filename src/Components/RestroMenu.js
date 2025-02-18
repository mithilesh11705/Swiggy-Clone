import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MenuApi } from "../Utils/constants";
import useRestroMenu from "../Utils/useRestroMenu";
const RestroMenu = () => {
  //

  const { resId } = useParams();
  //Custom Hook
  const resinfo = useRestroMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MenuApi + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();

  //   console.log(json);
  //   setresinfo(json.data);
  // };

  if (resinfo === null) {
    return <Shimmer />; //returning shimmer component if data is not loaded yet.
  }
  const n = resinfo?.cards[2]?.card?.card?.info.name;
  const cuisines = resinfo?.cards[2]?.card?.card?.info.cuisines;
  const CostforTwo = resinfo?.cards[2]?.card?.card?.info.costForTwoMessage;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

  return (
    <div className="menu">
      <h1>{n}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{CostforTwo}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name}-Rs.{item.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
                    <li>{itemCards[1]?.card?.info?.name}</li>
                    <li>{itemCards[2]?.card?.info?.name}</li> */}
      </ul>
    </div>
  );
};
export default RestroMenu;
