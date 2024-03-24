import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const useListOfRestaurants = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfRestCopy, setListOfRestCopy] = useState([]);
    useEffect(()=>{
        fetchResData();
    },[]);

    const fetchResData = async()=>{
        const data = await fetch(RES_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestCopy(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const updateListOfRestCopy = (filterRestau)=>{
        setListOfRestCopy(filterRestau);
    }

    return {listOfRestaurants,listOfRestCopy, updateListOfRestCopy};
}
export default useListOfRestaurants;
