import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props)=>{
    const {resData} = props;
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        sla
         } = resData?.info;
return(
    <div className="res-card">
        <img 
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h6>{cuisines.join(",")}</h6>
        <h6>Ratings : {avgRating}</h6>
        <h5>Cost for Two : {costForTwo}</h5>
        <h5>{sla?.slaString}</h5>
        <h4>Order Now</h4>
    </div>
)
};
export default RestaurantCard;