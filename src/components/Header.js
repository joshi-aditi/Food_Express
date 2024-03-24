import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName = "Login"; //USING NORMAL VARIABLE : btn will get updated but it won't be render because we requries like referesh type of to render the newvalue but it cannot be done. 
  const[btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("header component rendered");//FOR EACH CLICK THE HEADER COMPONENT GETS RENDERED... this is reconsilation and this rerendering occurs very fast... it just checks what need to be change in the component and just quickly changes it and update the ui...
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status :{onlineStatus?" ✅":" 🛑"}</li>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            (btnName === "Login")?setbtnName("Logout"):setbtnName("Login");
          }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;
