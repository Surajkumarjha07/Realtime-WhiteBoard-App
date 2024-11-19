import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false
}

export const LoginSlice = createSlice({
    initialState,
    name: 'Login',
    reducers: {
        setLogin: (state, action) => {
            // let 
        }
    }
})