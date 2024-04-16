// import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data , showItem,setShowIndex}) => {
  // console.log(data);
//   const [showItem, setShowItem] = useState(false); // ITEMLIST WERE HANDLING THERE OWN STATE BUT WE DON'T WANT THAT....
  const handleClick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div className="text-center"  data-testid = "item-category">
      {/*Header*/}
      <br></br>
      <div
        className={`text-center bg-white w-8/12 m-auto p-4 border-[#f1f1f6] border-b-[12px] flex justify-between cursor-pointer ${
          showItem ? "border-none" : "border-[#f1f1f6] border-b-[12px]"
        }`}
        onClick={handleClick}
      >
        <span className="font-bold text-base text-[#02060CEB]">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <span className="">⌵</span>
      </div>
      {/*Accordian body*/}
      {/* {console.log(typeof(data?.card?.card?.itemCards))} */}
      {showItem && <ItemList items={data?.card?.card?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
