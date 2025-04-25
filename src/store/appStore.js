import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from "./cartSlice" 

console.log(cartReducer.items);

const appStore = configureStore({
    reducer : {cart:cartReducer }
    
});

export default appStore;

// React Redux toolkit
// RTK Query quick start