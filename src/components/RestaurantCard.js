import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div className="p-4 m-4 w-52 h-auto border bg-gray-100 hover:bg-gray-200">
      <img alt="res-logo" className="w-48 h-52 rounded-2xl"
        src={CDN_LINK + cloudinaryImageId} />
      <h3 className="font-bold text-lg text-center">{name}</h3>
      <h4>{cuisines.join(",")}  </h4>
      <h4>{avgRating} ⭐ </h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} mins </h4>
    </div>
  )
}

export default RestaurantCard;