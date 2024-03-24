import { RESLOGO_URL } from "../utils/constants";

const ResCard = (props) => {
    //above shown is destructuring on the fly....
    const { resdata } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo,avgRating, sla } =
      resdata?.info || {};//resdata mai info property get... and of that destructure that name and all...
    const slaString = sla?.slaString;//sla property will get from above then again will destructure it to get the slaString...
    //THIS IS OPTIONAL CHAINING...
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={
            RESLOGO_URL +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        {/* the props is js object so we use it here using {}... remember this. */}
        <br></br>
        <h4>{cuisines.join(", ")}</h4>
        <br></br>
        <h4>{costForTwo}</h4>
        <br/>
        <h4>{avgRating}⭐</h4>
        <br></br>
        <h4>{slaString}</h4>
      </div>
    );
  };

export default ResCard;