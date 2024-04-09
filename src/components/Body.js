import { useEffect, useState } from "react";
import ResCard, { withPromotedLabel } from "./ResCard";
// import resList from "../utils/mockData";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
// import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { RES_URL } from "../utils/constants";
import Offline from "./Offline";
// import Shimmar from "./Shimmar";

const Body = () => {

  const resCardPromoted = withPromotedLabel(ResCard);//AND THEN USE THIS IN THE RESCARD SHOWING PART..... AT LINE 176
  //below lorJS is normal js var if that we update also then too our UI will not changed... to sync our ui with data we need statevariable which we get using hooks....
  let listOfRestaurantsJS = [
    {
      info: {
        id: "11239",
        name: "Thambbi",
        cloudinaryImageId: "t6av3q7weumzdozcmowp",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "Punjabi", "Snacks", "Thalis"],
        avgRating: 4.5,
        sla: {
          slaString: "20-25 mins",
        },
      },
    },
    {
      info: {
        id: "202836",
        name: "Hangout Cakes & More",
        cloudinaryImageId: "86cbacfd10d2f7e6186438a963b245be",
        costForTwo: "₹150 for two",
        cuisines: ["Bakery"],
        avgRating: 4.4,
        sla: {
          slaString: "20-25 mins",
        },
      },
    },
  ];

  //   let [listOfRestaurants,setListOfRestaurants] = useState([
  //     {
  //         info: {
  //           id: "11239",
  //           name: "Thambbi",
  //           cloudinaryImageId: "t6av3q7weumzdozcmowp",
  //           costForTwo: "₹400 for two",
  //           cuisines: ["South Indian", "Punjabi", "Snacks", "Thalis"],
  //           avgRating: 4.5,
  //           sla: {
  //             slaString: "20-25 mins",
  //           },
  //         },
  //       },
  //       {
  //         info: {
  //           id: "202836",
  //           name: "Hangout Cakes & More",
  //           cloudinaryImageId: "86cbacfd10d2f7e6186438a963b245be",
  //           costForTwo: "₹150 for two",
  //           cuisines: ["Bakery"],
  //           avgRating: 4.4,
  //           sla: {
  //             slaString: "20-25 mins",
  //           },
  //         },
  //       }
  //   ]);
  // const { listOfRestaurants, listOfRestCopy, updateListOfRestCopy } = useListOfRestaurants();
  const [listOfRestaurants,setListOfRestaurants] = useState([]);//NOW WHEN USING API WE DON'T NEED THAT MOCK DATA...
  //[resList] we didn't wrote bcz it takes array as default and that resList is array itself again writing [] will give u error...
  const [listOfRestCopy, setListOfRestCopy] = useState([]);
  const [searchText, setSearchText] = useState("");

  const{loggedInUser, setUserName} = useContext(UserContext);
  useEffect(()=>{
      fetchData();
  },[]);
  // //cors link : https://corsproxy.org/?
  const fetchData = async ()=>{
      const data = await fetch(RES_URL);

      const json = await data.json();

      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setListOfRestCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  // if(listOfRestaurants.length === 0){
  //     return <Shimmar/>;
  // }

  // console.log("Body rendered", listOfRestaurants); //THE BODY GETS RENDERED FIRST AND THEN THE USEEFFECT WILL BE CALLED...

  const onilineStatus = useOnlineStatus();

  if (onilineStatus === false)
    return (
     <Offline/>
    );

  return(
    <div className="res-container -mt-9">
      <div className="flex justify-between">
      
        <div className="search-div">
          <input
            type="text"
            data-testid = "search-input"
            className="p-2 border border-b-lime-200 w-[880px] m-3 ml-8"
            value={searchText}
            placeholder="Search Name of Restaurant"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-[#ee3137] px-5 h-12 rounded-md mt-4 mr-2 text-white font-semibold"
            onClick={() => {
              {
                /* when click on this button res should get filtered. */
              }
              // and we should get the res basusered on searchText.
              // console.log(searchText);
              const filterRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filterRes.length === 0) {
                // Display a message indicating no results found
                alert("No restaurants found matching the search criteria.");
                // You can set another state to display a message in your UI indicating no results found.
              } else {
                // Update the list of restaurants only if there are results
                setListOfRestCopy(filterRes);
                // updateListOfRestCopy(filterRes);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-[#ee3137] px-10 h-12 rounded-md mt-4 mr-4 text-white font-semibold"
          onClick={() => {
            //filter logic :
            // listOfRestaurantsJS = listOfRestaurantsJS.filter(
            //     (res)=> res.info.avgRating>4.4
            // );

            const filterRestau = listOfRestaurants.filter(
              (res) => (res.info.avgRating > 4.4)
            );
            setListOfRestCopy(filterRestau);
            // updateListOfRestCopy(filterRestau);
          }}
        >
          Get Top Rated Restaurants
        </button>
        {/* <input className="border border-black px-2" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input> */}
      </div>

      <div className="flex m-4 flex-wrap justify-between">
        {/* <ResCard resName = "Chinese Wok" cuisine="Chinese, Asian, Tibetan, Desserts" ratings = "4.3 ⭐" delTime ="40-45 mins"/>  */}
        {/* above are props they gets passed in as js object only. */}
        {/* <ResCard resName = "Thambbi" cuisine="South Indian, Punjabi, Snacks, Thalis" ratings = "4.5 ⭐" delTime ="20-25 mins"/> */}
          {/* {console.log(listOfRestCopy)} */}
          {listOfRestCopy.map((resturants) => (
          <Link
            to={"restaurants/" + resturants.info.id}
            key={resturants.info.id}
          >
            <ResCard resdata={resturants} />
          </Link>
        ))}

        {/* to props we want to pass object so we pass object like shown above... */}
      </div>
    </div>
  );
};

export default Body;
