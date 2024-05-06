import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/RestaurantList";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";


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

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async()=>{
    const data = await fetch( "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");   
    const json = await data.json();
    setListOfRestraunt (json?.data?.cards[2]?.data?.data?.cards);
};

if(ListOfRestaurants.length === 0){
  return <Shimmer />
}

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