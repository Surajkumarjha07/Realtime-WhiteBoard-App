import { configureStore } from '@reduxjs/toolkit';
import TextColorReducer from './slices/textColor'
import FunctionalityReducer from './slices/functionality'
import TextSizeReducer from './slices/textSize'
import FontFamilyReducer from './slices/fontFamily'

export const store = configureStore({
    reducer: {
        TextColor: TextColorReducer,
        Functionality: FunctionalityReducer,
        TextSize: TextSizeReducer,
        FontFamily: FontFamilyReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
