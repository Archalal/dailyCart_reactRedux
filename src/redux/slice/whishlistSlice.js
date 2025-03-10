import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice=createSlice(
    {
        name:"whishlist",
        initialState:[],
        reducers:{
            addToWhishlist:(state,dataFromView)=>{
                //state=dataFromView.payload only single item will
                //stored so we need to push to initial state (array)

                state.push(dataFromView.payload)



            },

            removeFromWhishlist:(state,dataFromWhishlist)=>{
                state=state.filter((val=>val.id!=dataFromWhishlist.payload.id))
            }
        }
    }
)

export const {addToWhishlist,removeFromWhishlist}=whishlistSlice.actions
export default whishlistSlice.reducer