import React from "react";

class UserClass extends React.Component{
    constructor(props){ //WHENEVER THIS COMPONENT IS LOADED MEANS INSTANCE OF A CLASS IS CREATED AND CONSTRUCTOR IS CALLED... AND THIS IS THE BEST PLACE FOR WRITING PROPS AND STATE VARIABLES.
        super(props);

        this.state={
            // count : 0
            name : "dummy",
            id : "dummy id",
            avatar_url : "",
        }
        console.log("UseClass Constructor Called");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/joshi-aditi");
        const json = await (data.json());

        this.setState(
            {
                name : json.login,
                id : json.id,
                avatar_url : json.avatar_url,
            }
        )

        console.log("UserClass Component DidMount");
    }

    componentDidUpdate(){
        console.log("component did updated");
    }

    render(){
        // debugger;
        console.log("UserClass Render called");
       return (
        <div className="user-card">
            {/* <h1>Count : {this.state.count}</h1> We can destructure it on the fly before return...
            <br></br>
            <button onClick={()=>{
                // this.state.count = this.state.count+1; NOOOOOOOO NEVER DIRECTLY UPDATE IT USE THE FUNCTION GIVEN BY REACT....
                this.setState({
                    count : this.state.count+1
                })
            }}>Count Increase</button> */}
            <h3 className="text-center font-semibold">Name : {this.state.name}</h3>
            <br/>
            <h4 className="text-center font-semibold">Id : {this.state.id}</h4>
            <br/>
            <div className="flex justify-center">
            <img src={this.state.avatar_url} className="h-36" alt="Avatar" />
            </div>
        </div>);
    }
}

export default UserClass;

