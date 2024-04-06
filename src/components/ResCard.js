import { RESLOGO_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCard = (props) => {
    //above shown is destructuring on the fly....
    const {loggedInUser} = useContext(UserContext);
    const { resdata } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo,avgRating, sla } =
      resdata?.info || {};//resdata mai info property get... and of that destructure that name and all...
    const slaString = sla?.slaString;//sla property will get from above then again will destructure it to get the slaString...
    //THIS IS OPTIONAL CHAINING...
    return (
      <div className="w-60 bg-gray-100 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out h-auto my-3 mx-2 rounded-lg shadow-lg text-center flex flex-col justify-center items-center pb-3" data-testid = "res-card">
        <img
          className="h-52 w-56 rounded-lg mt-3"
          src={
            RESLOGO_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold">{name}</h3>
        {/* the props is js object so we use it here using {}... remember this. */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}⭐</h4>        
        <h4>{slaString}</h4>
        {/* <h5>User : {loggedInUser}</h5> */}
        </div>
    );
  };

export const withPromotedLabel = (ResCard)=>{
  return (props)=>{
    return(
     <div>
       <label>Promoted</label>
        <ResCard {...props}/>
     </div>
     )
    }
}

export default ResCard;