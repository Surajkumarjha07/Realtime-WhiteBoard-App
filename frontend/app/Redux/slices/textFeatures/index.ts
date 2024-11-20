import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textColor: 'black',
    textSize: 'text-3xl',
    fontFamily: 'font-sans'
}

export const TextFeatures = createSlice({
    initialState,
    name: 'TextFeatures',
    reducers: {
        setTextColor: (state, action) => {
            state.textColor = action.payload;   
            console.log(action.payload);   
        },
        setTextSize: (state, action) => {
            state.textSize = action.payload;
            console.log(action.payload);   
        },
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload;
            console.log(action.payload);   
        }
    }
})

export const {setTextColor, setTextSize, setFontFamily} = TextFeatures.actions;
export default TextFeatures.reducer;