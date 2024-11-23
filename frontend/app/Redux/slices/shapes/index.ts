import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shapeType: 'rectangle',
    shapeColor: 'cyan-400'
}

export const ShapeFeatures = createSlice({
    initialState,
    name: 'ShapeFeatures',
    reducers: {
        setShapeType: (state, action) => {
            state.shapeType = action.payload;            
        },
        setShapeColor: (state, action) => {
            state.shapeColor = action.payload                        
        }
    }
})

export const { setShapeType, setShapeColor } = ShapeFeatures.actions;
export default ShapeFeatures.reducer;