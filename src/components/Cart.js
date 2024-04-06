import { useSelector } from "react-redux";
import Cartitems from "./Cartitems";
import { useDispatch } from "react-redux";
import { clearCart} from "../utils/cartSlice";
const Cart =()=>{
    const cardItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    console.log(cardItems);
    return(
        <div className="-mt-8">
        <hr></hr>
        <div className="pb-3 text-center">
        <h1 className="text-center font-semibold p-3 text-lg w-8/12 m-auto">Cart</h1>
        </div>
        <hr></hr>
        <div className="text-center mb-6">
        <Cartitems items={cardItems}/>
        <div>
        <button className="bg-[#e83533] px-5 py-3 h-12 rounded-md mt-4 mr-2 text-white font-bold cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
        <button className="bg-[#1BA672] px-5 py-3 h-12 rounded-md mt-4 mr-2 text-white font-bold cursor-pointer" onClick={()=>{
            alert("Please Use Swiggy or Zomato to place the Order ;)")
        }}>Place Order</button>
        </div>
        {cardItems.length===0 && (
            <h1 className="font-bold text-center text-lg m-6">Cart is Empty. Add items to the Cart!</h1>
        )}
        </div>

        </div>
    )
}
export default Cart;
