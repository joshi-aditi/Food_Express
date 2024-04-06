import {useState} from "react";
import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/constants";
import Shimmar from "./Shimmar";
import useRestMenu from "../utils/useRestMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

  const {resId} = useParams();
  // console.log(params);
  // console.log(MENU_URL+resId)
  // const [resInfo,setResInfo] = useState(null);
  const [showVeg, setShowVeg] = useState(false);
  const [showIndex,setShowIndex] = useState(null);

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
{console.log(resInfo);}
  if(resInfo===null) return <Shimmar/>;

  const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

  // let {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // if(itemCards === undefined) {
  //   itemCards = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
  // }

  //VEG TOGGLE LOGIC:::::::: at top first usestate is used...
  const toggleVeg = () => {
    setShowVeg(!showVeg);//set the use state variable...
  };

  // Filtered items based on showVeg state
  // const filteredItems = showVeg ? itemCards.filter(item => item.card.info.isVeg === 1) : itemCards;


  //FULL RES MENU...
  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories);

    return (
      <div className="-mt-7">
        <hr></hr>
        <div className="sticky top-0 bg-white z-10">
        <h1 className="font-bold text-2xl text-center text-[#02060CEB]">{name}</h1>
        <h3 className="font-semibold text-lg text-center text-[#3e4152]">{cuisines.join(", ")} - {costForTwoMessage}</h3>
        <hr></hr>
        </div>
        <div>
        {categories.map((category , index)=><RestaurantCategory key={category.card.card.title} data = {category} showItem={index==showIndex && true}
        setShowIndex= {()=>setShowIndex(index)}
        /> )}
        </div>

      </div>
    );
  };
  
  export default RestaurantMenu;
  