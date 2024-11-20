import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noteTextSize: 'text-3xl',
    noteFontFamily: 'font-sans',
    noteBackgroundColor: 'orange-300'
}

export const NoteFeatures = createSlice({
    initialState,
    name: 'NoteFeatures',
    reducers: {
        setNoteTextSize: (state, action) => {
            state.noteTextSize = action.payload
            console.log("text size: ", action.payload);            
        },

        setNoteFontFamily: (state, action) => {
            state.noteFontFamily = action.payload
            console.log("font family: ", action.payload);            
        },

        setNoteBackgroundColor: (state, action) => {
            state.noteBackgroundColor = action.payload;
            console.log("bg color: ", action.payload);            
        }
    }
})

export const {setNoteBackgroundColor, setNoteTextSize, setNoteFontFamily} = NoteFeatures.actions;
export default NoteFeatures.reducer