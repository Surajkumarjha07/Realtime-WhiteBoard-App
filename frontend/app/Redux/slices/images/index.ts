import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: '' 
}

export const ImageSlice = createSlice({
    initialState,
    name: 'ImageFeatures',
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
            console.log("action: ", action.payload);
        }
    }
})

export const {setImage} = ImageSlice.actions;
export default ImageSlice.reducer;