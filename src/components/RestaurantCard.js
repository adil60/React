import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData} = props;
    const { cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    //console.log(sla)
    //const { deliveryTime} = sla.deliveryTime;
    //console.log(props);
    return (
      <div className="res-card">
        <img alt="res-logo" className="res-logo"
          src={CDN_LINK + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}  </h4>
        <h4>{avgRating} ⭐ </h4>
        <h4>{costForTwo} </h4>
        <h4>{sla.deliveryTime} mins </h4>
      </div>
    )
  }
  
export default RestaurantCard;