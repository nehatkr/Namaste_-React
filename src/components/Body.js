import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/RestaurantList";
import { useState } from "react";


const Body = () =>{
    const [ListOfRestaurants, setListOfRestraunt] = useState(restaurantList );

let ListOfRestaurantsjs = [
    {
        data:{
          id: "74453",
          name: "Domino's Pizza",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["Pizzas"],
          costForTwo: 40000,
          deliveryTime: 46,
          avgRating: "3.9",
        }, 
      },
    {
        data:{
          id: "74454",
          name: "KFC",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["Pizzas"],
          costForTwo: 40000,
          deliveryTime: 35,
          avgRating: "4.0",
        }, 
      },
    {
        data:{
          id: "74456",
          name: "MAC D",
          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
          cuisines: ["Pizzas"],
          costForTwo: 40000,
          deliveryTime: 45,
          avgRating: "4.1",
        }, 
      },
];

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                        const filteredList = ListOfRestaurants.filter(
                            (res) => res.data.avgRating>4
                        );
                        setListOfRestraunt(filteredList); 
                }}>
                    Top Rated Restaurants</button>
                 </div>
            <div className="restro-container">
            {
                ListOfRestaurants.map((restaurant) => (
                <RestaurantCard key= {restaurant.data.id} resData={restaurant}/>
            ))}
        
            </div>
        </div>
    )
    };
    export default Body;