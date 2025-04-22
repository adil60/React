import RestaurantCard,{WithRecommended} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [originalList, setOriginalList] = useState([]);

  const ResRecommended = WithRecommended(RestaurantCard);
  const { userName , setInfo } = useContext(userContext);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4587328&lng=78.3522213&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setOriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-between p-2 m-4">
        <div >
        <button className="bg-gray-200 border py-2 rounded cursor-pointer" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
          setOriginalList(filteredList);
          console.log(listOfRestaurants);
        }} >Top Rated Restaurants</button>

        <div className="m-4">
          <label>User Name : </label>
          <input className="border border-black" type="text"
          value = { userName } 
          onChange={ (e) => setInfo(e.target.value) } />
        </div>
        </div>
        <div className="">
          <input type="search" className="search border-black border m-4" placeholder="Enter here" value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }} />
          <button className="bg-green-200 cursor-pointer rounded-sm border"
          onClick={() => {
            const searchFilter = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
            setOriginalList(searchFilter);
          }}> Search</button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {
          originalList.map((restaurant) => <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}> 
          {restaurant.info.avgRating >= 4.4 ? ( <ResRecommended resData={restaurant}/> ) : (<RestaurantCard resData={restaurant} />) }
          </Link>)
        }
      </div>
    </div>
  )
}

export default Body;