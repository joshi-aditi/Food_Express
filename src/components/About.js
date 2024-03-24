import User from './User';
import UserClass from './UserClass';

const About = ()=>{
    return(
        <div className="m-2">
            <hr></hr>
            <h1 className='text-center font-bold text-xl p-2'>About Us</h1>
            <h2 className='text-center text-md p-2'>This is about us....</h2>
            <hr></hr>
            {/* <br/> */}
            {/* <User name = {"Aditi Joshi (fn)"} Location = {"Mulund (fn)"}/> */}
            <br></br>
            <UserClass name = {"Aditi Joshi (cs)"} Location = {"Mulund (cs)"}/>
        </div>
    ); 
}

export default About;
