import { RESLOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem} from "../utils/cartSlice";
const Cartitems = (items) => {
    // console.log(items.items);
    const dispatch = useDispatch();
    const handleremoveItem = (item)=>{
        dispatch(removeItem(item));
        window.alert('Item removed from cart!');
    }
    return (
       <div>
        {
            items.items.map((item) => (
                <div key={item?.card?.info?.id} className="flex r m-auto w-8/12 border-gray-200 border-b-2 pl-4 pt-2 pb-8" data-testid = "items">
                    <div className="text-sm w-9/12 text-left">
                        <p className="text-[#02060CBF] font-bold text-base">{item?.card?.info?.name}</p>
                        <p className="text-[#3e4152] font-semibold text-sm">₹{(item?.card?.info?.price)?(item?.card?.info?.price/100):(item?.card?.info?.defaultPrice/100)}</p>
                        <p className="text-[#282c3f73] text-sm pt-3">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img src={RESLOGO_URL+item?.card?.info?.imageId} className="rounded-lg bg-[#282c3f0d]"></img>
                        <div>
                        <button className="absolute bg-white font-extrabold text-md text-[#e83533] py-[0.5rem] px-7 rounded-lg border border-gray-300 -mt-5 -ml-14" onClick={()=>handleremoveItem(item)} data-testid = "RemoveBtn">Remove</button></div>
                    </div>
                </div>
            ))
        } 
       </div>
    );
};

export default Cartitems;