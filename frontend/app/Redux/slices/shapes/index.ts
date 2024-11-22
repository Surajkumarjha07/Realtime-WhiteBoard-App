import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shape: '',
    shapeColor: 'red-500'
}

export const ShapeFeatures = createSlice({
    initialState,
    name: 'ShapeFeatures',
    reducers: {
        setShape: (state, action) => {
            state.shape = action.payload;
        },
        setShapeColor: (state, action) => {
            state.shapeColor = action.payload
        }
    }
})

export const { setShape } = ShapeFeatures.actions;
export default ShapeFeatures.reducer;