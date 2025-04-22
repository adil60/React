import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import RestaurantCategory from "../components/RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [ showItems, setShowItems] = useState(0);

  const resInfo = useRestaurantData(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const menu =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  const data =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) =>
        (item?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

  return (
    <div className="text-center">
        <h1 className="font-bold text-4xl px-4 mx-4">{name}</h1>
        <h3 className="font-bold text-lg">
          {avgRating}⭐• {costForTwoMessage}
        </h3>
        <h3 className="font-bold" style={{ color: "rgb(255, 82, 0)" }}>{cuisines.join(", ")}</h3>
      
        <h2 className="text-2xl font-bold">Menu</h2>
        <ul>
          {
            data.map( (item,index)=> (
                <RestaurantCategory category={item}
                 key={item.card.card.categoryId} 
                 index = {index}
                 isActive = {showItems===index }
                 showItem = {(index)=> setShowItems(index)}
                  />
            ))
          }
        </ul>
    </div>
  );
};

export default RestaurantMenu;
