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
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
        <img 
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h6>{cuisines.join(",")}</h6>
        <h6>Ratings : {avgRating}</h6>
        <h5>Cost for Two : {costForTwo}</h5>
        <h5>{sla?.slaString}</h5>
        <h4>Order Now</h4>
    </div>
)
};
export const withPromotedLable = (RestaurantCard)=>{
    return(props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;