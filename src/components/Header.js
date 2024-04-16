import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login"; //USING NORMAL VARIABLE : btn will get updated but it won't be render because we requries like referesh type of to render the newvalue but it cannot be done. 
  const[btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items);
  // console.log(cartItems);
  // console.log("header component rendered");//FOR EACH CLICK THE HEADER COMPONENT GETS RENDERED... this is reconsilation and this rerendering occurs very fast... it just checks what need to be change in the component and just quickly changes it and update the ui...
    return (
      <div className="flex justify-between">
        <div className="w-44">
          <Link to="/"><img src={LOGO_URL} className="w-36 -mt-5 ml-3 cursor-pointer"></img></Link>
        </div>
        <div className="flex">
          <ul className="flex">
            <li className="p-4 m-3 font-semibold">Online Status :{onlineStatus?" ✅":" 🛑"}</li>
            <li className="p-4 m-3 font-semibold"> <Link to="/">Home</Link></li>
            <li className="p-4 m-3 font-semibold"><Link to="/about">About Us</Link></li>
            <li className="p-4 m-3 font-semibold"><Link to="/contact">Contact Us</Link></li>
            {/* <li className="p-4 m-3 font-semibold"><Link to="/grocery">Grocery</Link></li> */}
            <li className="p-4 m-3 font-semibold cursor-pointer"><Link to="/cart">Cart - ({cartItems.length} Items)</Link></li>
          <button className="bg-[#ee3137] px-5 h-12 rounded-md mt-4 mr-4 text-white font-semibold" onClick={()=>{
            (btnName === "Login")?setbtnName("Logout"):setbtnName("Login");
          }}>{btnName}</button>
          {/* <span className="font-semibold p-7">{loggedInUser}</span> */}
          </ul>
        </div>
      </div>
    );
  };

export default Header;
