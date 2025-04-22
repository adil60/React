import { useContext } from "react";
import { CDN_LINK } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { userName,age } = useContext(userContext);

  return (
    <div className="p-4 m-4 w-52 h-auto border bg-gray-100 hover:bg-gray-200">
      <img alt="res-logo" className="w-48 h-52 rounded-2xl"
        src={CDN_LINK + cloudinaryImageId} />
      <h3 className="font-bold text-lg text-center">{name}</h3>
      <h4>{cuisines.join(",")}  </h4>
      <h4>{avgRating} ⭐ </h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} mins </h4>
      <h4>{userName} </h4>
    </div>
  )
}

export const WithRecommended = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white px-2 mx-4 my-2 rounded">Recommended</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;