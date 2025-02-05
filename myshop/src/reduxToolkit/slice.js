import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const slice = createSlice({
    name:'slice',
    state:initialState,
    reducers:{
        add:(state)=>({...state,value:state.value+1}),
        subtract:(state)=>({...state,value:state.value-1})
    }
})

export const {add,subtract} = slice.actions

export default slice.reducer;

