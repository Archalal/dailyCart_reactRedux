import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import singleProductSlice from "./slice/singleProductSlice";
import whishlistSlice from "./slice/whishlistSlice"

const cartStore= configureStore({
    reducer:{
        productReducer:productSlice,
        singleProductReducer:singleProductSlice,
        whishListReducer:whishlistSlice


    }
})

export default cartStore