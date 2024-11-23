import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textColor: 'black',
    textSize: 'text-3xl',
    fontFamily: 'font-sans',
    textBrightness: 100
}

export const TextFeatures = createSlice({
    initialState,
    name: 'TextFeatures',
    reducers: {
        setTextColor: (state, action) => {
            state.textColor = action.payload;   
        },
        setTextSize: (state, action) => {
            state.textSize = action.payload;
        },
        setFontFamily: (state, action) => {
            state.fontFamily = action.payload;
        },
        setTextBrightness: (state, action) => {
            state.textBrightness = action.payload;
            console.log(action.payload);            
        }
    }
})

export const {setTextColor, setTextSize, setFontFamily, setTextBrightness} = TextFeatures.actions;
export default TextFeatures.reducer;