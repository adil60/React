import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="m-4 p-4 border border-black">
                {
                    cartItems.length === 0 
                    ? <div className="text-center" >
                        <img className="w-72 h-64 " 
                         src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"/>
                        <p className="py-4 my-4 font-bold text-2xl">Your cart is empty</p>
                        <p>You can go to home page to view more restaurants</p>
                    </div> : 
                    
                    cartItems.map((item) => 
                         <ItemList data={item.data} />
                    )
                }
            

        </div>
    )
}

export default Cart;