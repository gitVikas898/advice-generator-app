import { createSlice } from "@reduxjs/toolkit";

const adviceSlice = createSlice({
    name:"advices",
    initialState : {
        advice:null,
    },
    reducers:{
        addAdvice:(state,action)=>{
            state.advice = action.payload
        }
    }
})

export const {addAdvice} = adviceSlice.actions;
export default adviceSlice.reducer