import { useEffect, useState } from "react";
import ResCard from "./ResCard";
// import resList from "../utils/mockData";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Shimmar from "./Shimmar";

const Body = () => {
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
  const { listOfRestaurants, listOfRestCopy, updateListOfRestCopy } =
    useListOfRestaurants();
  // const [listOfRestaurants,setListOfRestaurants] = useState([]);//NOW WHEN USING API WE DON'T NEED THAT MOCK DATA...
  //[resList] we didn't wrote bcz it takes array as default and that resList is array itself again writing [] will give u error...
  // const [listOfRestCopy, setListOfRestCopy] = useState([]);
  const [searchText, setSearchText] = useState("");

  // useEffect(()=>{
  //     fetchData();
  // },[]);
  // //cors link : https://corsproxy.org/?
  // const fetchData = async ()=>{
  //     const data = await fetch(RES_URL);

  //     const json = await data.json();

  //     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //     setListOfRestCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // };

  // if(listOfRestaurants.length === 0){
  //     return <Shimmar/>;
  // }

  console.log("Body rendered"); //THE BODY GETS RENDERED FIRST AND THEN THE USEEFFECT WILL BE CALLED...

  const onilineStatus = useOnlineStatus();

  if (onilineStatus === false)
    return (
      <h1>
        It seems like you are offline! Please Check your Internet Connection.
      </h1>
    );

  return listOfRestCopy.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="res-container">
      <div className="filter">
        <div className="search-div">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="Search Name of Restaurant"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-div-btn"
            onClick={() => {
              {
                /* when click on this button res should get filtered. */
              }
              // and we should get the res based on searchText.
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
                // setListOfRestCopy(filterRes);
                updateListOfRestCopy(filterRes);
              }
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            //filter logic :
            // listOfRestaurantsJS = listOfRestaurantsJS.filter(
            //     (res)=> res.info.avgRating>4.4
            // );

            const filterRestau = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            // setListOfRestCopy(filterRestau);
            updateListOfRestCopy(filterRestau);
          }}
        >
          Get Top Rated Restaurants
        </button>
      </div>

      <div className="res-cont">
        {/* <ResCard resName = "Chinese Wok" cuisine="Chinese, Asian, Tibetan, Desserts" ratings = "4.3 ⭐" delTime ="40-45 mins"/>  */}
        {/* above are props they gets passed in as js object only. */}
        {/* <ResCard resName = "Thambbi" cuisine="South Indian, Punjabi, Snacks, Thalis" ratings = "4.5 ⭐" delTime ="20-25 mins"/> */}

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
