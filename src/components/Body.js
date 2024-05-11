import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/RestaurantList";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";


const Body = () =>{
    const [ListOfRestaurants, setListOfRestraunt] = useState(restaurantList );
    const[searchText , setSearchText] = useState("");

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
    const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithstyle.restaurants);
    // optional channing
    setListOfRestraunt (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

// conditional Rendering

    return ListOfRestaurants.length === 0? <Shimmer /> :(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }}>
                 </input>
                <button
                 onClick={()=>{
                  
                }} 
                >Search</button>
              </div>
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
                <RestaurantCard key= {restaurant.info.id} resData={restaurant}/>
            ))}
        
            </div>
        </div>
    )
    };
    export default Body;