import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textSize: 'text-xl'
}

export const TextSizeSlice = createSlice({
    initialState,
    name: 'TextSize',
    reducers: {
        setTextSize: (state, action) => {
            state.textSize = action.payload
        }
    }
})

export const { setTextSize } = TextSizeSlice.actions;
export default TextSizeSlice.reducer;