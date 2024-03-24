import User from './User';
import UserClass from './UserClass';

const About = ()=>{
    return(
        <div className='about'>
            <br></br>
            <h1>About Us</h1>
            <br/>
            <h2>This is about us....</h2>
            {/* <br/> */}
            {/* <User name = {"Aditi Joshi (fn)"} Location = {"Mulund (fn)"}/> */}
            <br></br>
            <UserClass name = {"Aditi Joshi (cs)"} Location = {"Mulund (cs)"}/>
        </div>
    );
}

export default About;
