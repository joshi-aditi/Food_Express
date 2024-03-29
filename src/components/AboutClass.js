import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
                <br></br>
                <h2 className="font-bold">
                    <UserContext.Consumer>
                        {
                            ({loggedInUser})=>
                                <h2>{loggedInUser}</h2>
                            
                        }
                    </UserContext.Consumer>
                </h2>
                <br/>
                <h2>This is About Us</h2>
                <br/>
                <h2 className="font-bold">
                    <UserContext.Consumer>
                        {
                            ({loggedInUser})=>
                                <h2>{loggedInUser}</h2>
                            
                        }
                    </UserContext.Consumer>
                </h2>
                    <br></br>
                <UserClass/>
                {/* <UserClass/> */}
            </div>
        )
    }
}

export default AboutClass;
