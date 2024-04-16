import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
// import AboutClass from "./components/AboutClass";
import Shimmar from "./components/Shimmar";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName,setUserName] = useState();
  //For authentication type dummy code....:
  useEffect(()=>{
    const data = "Aditi Joshi";
    setUserName(data);
  },[]);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="m-0 p-0" style={{background:"", margin: "0px"}}>
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(()=>import("./components/Grocery"));//JUST USING THIS WILL GIVE ERROR WHY BCZ : that js takes time to load but react is too fast it just loads that component but that component code is still not present soo we get error... TO REMOVE THIS ERROR WE NEED TO WRAP OUR COMP INSIDE SUSPENSE.... AND ALSO PASS FALLBACK/PLACEHOLDER...
const About = lazy(()=>import("./components/About"));
//cbr takes a list of paths and path is a object...
const appRouter = createBrowserRouter( [
  {
    path:"/",
    element:<AppLayout/>,
    
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<Shimmar/>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
      },
      {
        path:"restaurants/:resId",//THIS IS DYNAMIC ROUTING...
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>

      }
    ],
    errorElement:<Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
