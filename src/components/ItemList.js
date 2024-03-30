import { RESLOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = (items) => {
    // console.log(items.items);
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
        window.alert('Item added to cart!');
    }
    return (
       <div>
        {
            items.items.map((item) => (
                <div key={item?.card?.info?.id} className="flex r m-auto w-8/12 border-gray-200 border-b-2 pl-4 pt-2 pb-8">
                    <div className="text-sm w-9/12 text-left">
                        <p className="text-[#3e4152] font-bold text-base">{item?.card?.info?.name}</p>
                        <p className="text-[#3e4152] font-semibold text-sm">₹{(item?.card?.info?.price)?(item?.card?.info?.price/100):(item?.card?.info?.defaultPrice/100)}</p>
                        <p className="text-[#282c3f73] text-sm pt-3">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img src={RESLOGO_URL+item?.card?.info?.imageId} className="rounded-lg bg-[#282c3f0d]"></img>
                        <div>
                        <button className="absolute bg-white font-extrabold text-md text-[#1BA672] py-[0.5rem] px-7 rounded-lg border border-gray-300 -mt-5 -ml-10" onClick={()=>handleAddItem(item)}>ADD + </button></div>
                    </div>
                </div>
            ))
        } 
       </div>
    );
};

export default ItemList;