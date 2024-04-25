import {CDN_URL} from "../assets/contents";

const RestCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" src = {CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
            <p>{avgRating}</p>
        </div>
    )
}

export default RestCard;