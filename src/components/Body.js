import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


// let listOfRestaurants = [
//     {
//         "info": {
//           "id": "804529",
//           "name": "Dfc Bakery And Food Court",
//           "cloudinaryImageId": "60a8b98fc9d14de1acff6cad0731923b",
//           "costForTwo": "₹300 for two",
//           "cuisines": ["Bakery","Cakes and Pastries", "Desserts", "Pizzas", "Chinese", "Fast Food"],
//           "avgRating": 4.1,
//           "sla": {
//             "deliveryTime": 13,
//           },
//         }
//       },
//       {
//         "info": {
//           "id": "804526",
//           "name": "KFC",
//           "cloudinaryImageId": "60a8b98fc9d14de1acff6cad0731923b",
//           "costForTwo": "₹400 for two",
//           "cuisines": ["Bakery","Cakes and Pastries", "Desserts", "Pizzas"],
//           "avgRating": 3.9,
//           "sla": {
//             "deliveryTime": 23,
//           },
//         }
//       },
//       {
//         "info": {
//           "id": "802526",
//           "name": "Mc D",
//           "cloudinaryImageId": "60a8b98fc9d14de1acff6cad0731923b",
//           "costForTwo": "₹500 for two",
//           "cuisines": ["Fast Food","Cakes and Pastries", "Desserts", "Pizzas"],
//           "avgRating": 4.4,
//           "sla": {
//             "deliveryTime": 25,
//           },
//         }
//       },
// ]



const Body = () => {
    const [ listOfRestaurants, setListOfRestaurants] = useState(resList);
    
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={ ()=> {
            const filteredList = listOfRestaurants.filter( (res)=> res.info.avgRating > 4.2 );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }  } >Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
            listOfRestaurants.map((restaurant) =>   <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
          }
        </div>
      </div>
    )
  }

export default Body;