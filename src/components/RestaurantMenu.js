import {useState} from "react";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
import Shimmar from "./Shimmar";
import useRestMenu from "../utils/useRestMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurantMenu = () => {

  const {resId} = useParams();
  // console.log(params);
  // console.log(MENU_URL+resId)
  // const [resInfo,setResInfo] = useState(null);
  const [showVeg, setShowVeg] = useState(false);

  const resInfo = useRestMenu(resId); //THIS IS OUR CUSTOME HOOK.....
  // const fetchMenu = async()=>{
  //   const data = await fetch(MENU_URL+resId);
  //   const json = await data.json();
  //   setResInfo(json);
  // }
  // useEffect(()=>{
  //   fetchMenu();
  // },[]);
  const onilineStatus = useOnlineStatus();

  if (onilineStatus === false)
    return (
      <h1>
        It seems like you are offline! Please Check your Internet Connection.
      </h1>
    );

  if(resInfo===null) return <Shimmar/>;

  const {name,cuisines,costForTwoMessage} = resInfo.data?.cards[0]?.card?.card?.info;

  let {itemCards} = resInfo.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  if(itemCards === undefined) {
    itemCards = resInfo.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
  }

  //VEG TOGGLE LOGIC:::::::: at top first usestate is used...
  const toggleVeg = () => {
    setShowVeg(!showVeg);//set the use state variable...
  };

  // Filtered items based on showVeg state
  const filteredItems = showVeg ? itemCards.filter(item => item.card.info.isVeg === 1) : itemCards;

    return (
      <div className="menu">
        <h1>{name}</h1>
        <br />
        <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <br/>
        <div className="menu-in">
        <h4>✔ Menu ✔</h4>
        <button onClick={toggleVeg} className="toggle-veg">
        {showVeg ? "Show All" : "Show Veg Only"}
        {/* showveg normally false hoga isley phle likha hai show all. */}
        </button>
        </div>
          <ul>
            {
              filteredItems.map((item)=>
              <li key={item.card.info.name}> 
              {item.card.info.isVeg === 1 ? ' 🥦 ' : ' 🍗 '}
              {item.card.info.name} - &#x20B9; {Math.floor((item.card.info.defaultPrice)/100) || Math.floor((item.card.info.price)/100)}
              </li>
              )
            }
            {/* <li>{itemCards[0].card.info.name}</li>
            <li>{itemCards[1].card.info.name}</li>
            <li>{itemCards[2].card.info.name}</li> */}
          </ul>
      </div>
    );
  };
  
  export default RestaurantMenu;
  