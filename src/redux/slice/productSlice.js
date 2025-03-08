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
        dummyAllProducts:[],
        loading:true,
        error:""
    },
    reducers:{

        searchproducts:(state,valueFromHeader)=>{
            state.allProducts=state.dummyAllProducts.filter((products)=>products.title.toLowerCase().includes(valueFromHeader.payload.toLowerCase()))
        }

    },
    extraReducers:(builder)=>{
        //state=allProducts=[]
        //data=payload (api ill ninnu kittuna data)
        builder.addCase(fetchAllProducts.fulfilled,(state,data)=>{

            state.allProducts=data.payload,
            state.dummyAllProducts=data.payload,
            state.loading=false,
           state. error=""

        });
        builder.addCase(fetchAllProducts.pending,(state,data)=>{
            state.allProducts=[],
            state.dummyAllProducts=[],
            state.loading=true,
            state.error=""
        });
        builder.addCase(fetchAllProducts.rejected,(state,data)=>{
            state.allProducts=[],
            state.dummyAllProducts=[],
            state.loading=false,
            state.error="API calling has been declined"
        });
    }
})


export const{searchproducts}=productSlice.actions
export default productSlice.reducer
