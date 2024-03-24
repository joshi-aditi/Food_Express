import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component{
    constructor(props){
        super(props);
        console.log("AboutClass Constructor");
    }

    componentDidMount(){
        
        console.log("AboutClass ComponentDidMount");
    }
    render(){
        console.log("AboutClass Render");
        return(
            <div>
                <h1>About Us Class Component</h1>
                <br/>
                <h2>This is About Us</h2>
                <br/>
                <UserClass/>
                {/* <UserClass/> */}
            </div>
        )
    }
}

export default AboutClass;
