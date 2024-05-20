// import restaurantList from "../utils/RestaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";



const Body = () =>{
    const [ListOfRestaurants, setListOfRestraunt] = useState([] );
    const[searchText , setSearchText] = useState("");
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);

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
    const data = await fetch( "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1542045&lng=85.8918454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   
    const json = await data.json();
    // optional channing
    setListOfRestraunt (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                   const filteredRestaurant = ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilteredRestaurant(filteredRestaurant);
                }} 
                >Search</button>
              </div>
                <button className="filter-btn" 
                onClick={()=>{
                        const filteredList = ListOfRestaurants.filter(
                            (res) => res.info.avgRating>4
                        );
                        setListOfRestraunt(filteredList); 
                }}>
                    Top Rated Restaurants</button>
                 </div>
            <div className="restro-container">
            { filteredRestaurant.map((restaurant) => (
                <Link
                 key= {restaurant.info.id} 
                to = {"restaurants/"+restaurant.info.id}
                >
                  <RestaurantCard  resData={restaurant}/></Link>
            ))}
        
            </div>
        </div>
    )
    };
    export default Body;