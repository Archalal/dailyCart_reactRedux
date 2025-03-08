import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductById=createAsyncThunk(

    "singleProduct/fetchProductById",async (id)=>{
        let {data}= await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(data);
        return data;
        
        
    },{}
)



const singleProductSlice=createSlice({
    name:"singleProduct",
    initialState:{
        sProducts:[],
        loading:true,
        error:""
    },
    reducers:{

       
        },


    extraReducers:(builder)=>{
        //state=allProducts=[]
        //data=payload (api ill ninnu kittuna data)
        builder.addCase(fetchProductById.fulfilled,(state,data)=>{

            state.sProducts=data.payload,
          
            state.loading=false,
           state. error=""

        });
        builder.addCase(fetchProductById.pending,(state,data)=>{
            state.sProducts=[],
         
            state.loading=true,
            state.error=""
        });
        builder.addCase(fetchProductById.rejected,(state,data)=>{
            state.sProducts=[],
           
            state.loading=false,
            state.error="API calling has been declined"
        });
    }
})


export default singleProductSlice.reducer

