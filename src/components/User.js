import React from "react";
import { useState } from "react";

const User = (props)=>{
    const[count] = useState(0);
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <br></br>
            <h3>Name : {props.name}</h3>
            <br/>
            <h4>Location : {props.Location}</h4>
            <br/>
            <h5>Contact : aditijoshi@gmail.com</h5>
        </div>
    );
}
export default User;
