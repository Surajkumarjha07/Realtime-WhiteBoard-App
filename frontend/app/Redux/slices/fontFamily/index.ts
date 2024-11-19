import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fontFamily: 'font-sans'
}

export const FontFamilySlice = createSlice({
    initialState,
    name: 'FontFamily',
    reducers: {
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload
            console.log(action.payload);
            
        }
    }
})

export const {setFontFamily} = FontFamilySlice.actions;
export default FontFamilySlice.reducer;