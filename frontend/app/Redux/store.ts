import { configureStore } from '@reduxjs/toolkit';
import FunctionalityReducer from './slices/functionality'
import TextFeaturesReducer from './slices/textFeatures';
import NoteFeaturesReducer from './slices/noteFeatures';
import ShapeFeaturesReducer from './slices/shapes'
import ImageFeaturesReducer from './slices/images'
import PencilFeaturesReducer from './slices/pencil'

export const store = configureStore({
    reducer: {
        Functionality: FunctionalityReducer,
        TextFeatures: TextFeaturesReducer,
        NoteFeatures: NoteFeaturesReducer,
        ShapeFeatures: ShapeFeaturesReducer,
        ImageFeatures: ImageFeaturesReducer,
        PencilFeatures: PencilFeaturesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
