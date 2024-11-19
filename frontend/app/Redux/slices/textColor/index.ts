import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textColor: 'text-black'
}

export const TextColorSlice = createSlice({
    initialState,
    name: 'TextColor',
    reducers: {
        setTextColor: (state, action) => {
            state.textColor = action.payload;            
        }
    }
})

export const {setTextColor} = TextColorSlice.actions;
export default TextColorSlice.reducer;