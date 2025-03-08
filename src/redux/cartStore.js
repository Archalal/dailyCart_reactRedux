import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import singleProductSlice from "./slice/singleProductSlice";


const cartStore= configureStore({
    reducer:{
        productReducer:productSlice,
        singleProductReducer:singleProductSlice

    }
})

export default cartStore