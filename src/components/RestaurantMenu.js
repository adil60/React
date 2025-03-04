import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const url = MENU_API + resId;
        const data = await fetch(url);
        const menu = await data.json();
        setResInfo(menu?.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const menu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (
        <div className="restaurantMenu">
            <div className="details">
                <h1>{name}</h1>
                <h3>{avgRating}⭐• {costForTwoMessage}</h3>
                <h3 style={{ color: "rgb(255, 82, 0)" }}>{cuisines.join(", ")}</h3>
            </div>
            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    {menu.map((mnu) => (<li key={mnu?.card?.info?.id}> {mnu?.card?.info?.name} - {mnu?.card?.info?.price / 100} Rs</li>))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;
