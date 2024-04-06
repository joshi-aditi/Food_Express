const Contact = ()=>{
    return(
        <div className="-mt-5"> 
            <hr></hr>
            <h1 className="text-center font-semibold p-5">Contact Us Page</h1>
            <hr></hr>
            <div className="text-center">
                <input placeholder="Enter Your Name" className="p-2 border border-black m-3"></input>
                <input placeholder="Enter Message" className="p-2 border border-black m-3"></input>
                <button className="bg-[#ee3137] px-5 h-12 rounded-md mt-4 mr-2 text-white font-semibold">Submit</button>
            </div>

        </div>
    )
}
export default Contact;