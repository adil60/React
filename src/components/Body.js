import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [ listOfRestaurants, setListOfRestaurants] = useState([]);
    const  [search,setSearch] = useState("");
    const [originalList , setOriginalList] = useState([]);
    useEffect( ()=> {
      fetchData();
    },[] );

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.7998492&lng=78.9146798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setOriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length==0){
      return <Shimmer />;
    }
    
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={ ()=> {
            const filteredList = listOfRestaurants.filter( (res)=> res.info.avgRating > 4.2 );
            setOriginalList(filteredList);
            console.log(listOfRestaurants);
          }  } >Top Rated Restaurants</button>
          <div>
          <input type="search" className="search" placeholder="Search here" value={search}
          onChange={ (event)=> {
            console.log(event.target.value);
            setSearch(event.target.value);
          }   } />
          <button onClick={() => {
             const searchFilter = listOfRestaurants.filter( (res)=> res.info.name.toLowerCase().includes(search.toLowerCase()))
             setOriginalList(searchFilter); 
          }}> Search</button>
          </div>
        </div>
        <div className="res-container">
          {
            originalList.map((restaurant) =>   <Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>)
          }
        </div>
      </div>
    )
  }

export default Body;