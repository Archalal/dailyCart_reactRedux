import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllProducts=createAsyncThunk(

    "product/fetchAllProducts",async ()=>{
        let {data}= await axios.get("https://dummyjson.com/products")
        console.log(data);
        return data.products;
        
        
    },{}
)
const productSlice=createSlice({
    name:"product",
    initialState:{
        allProducts:[],
        loading:true,
        error:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        //state=allProducts=[]
        //data=payload (api ill ninnu kittuna data)
        builder.addCase(fetchAllProducts.fulfilled,(state,data)=>{

            state.allProducts=data.payload,
            state.loading=false,
           state. error=""

        });
        builder.addCase(fetchAllProducts.pending,(state,data)=>{
            state.allProducts=[],
            state.loading=true,
            state.error=""
        });
        builder.addCase(fetchAllProducts.rejected,(state,data)=>{
            state.allProducts=[],
            state.loading=false,
            state.error="API calling has been declined"
        });
    }
})
export default productSlice.reducer