import { configureStore } from '@reduxjs/toolkit';
import FunctionalityReducer from './slices/functionality'
import TextFeaturesReducer from './slices/textFeatures';
import NoteFeaturesReducer from './slices/noteFeatures';

export const store = configureStore({
    reducer: {
        Functionality: FunctionalityReducer,
        TextFeatures: TextFeaturesReducer,
        NoteFeatures: NoteFeaturesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
