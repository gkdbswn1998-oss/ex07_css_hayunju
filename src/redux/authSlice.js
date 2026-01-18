import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: sessionStorage.getItem("username") ? true : false,
        username: sessionStorage.getItem("username") || null,
        loading: false,
        error: null,
        result: 0
    },
    reducers: {
        logout: (state) => {
            sessionStorage.removeItem("username"); 
            state.isLoggedIn = false;
            state.username = null;
            state.result = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.result === 0) { 
                state.isLoggedIn = true;
                state.username = action.payload.username;
                sessionStorage.setItem("username", action.payload.username);
            }
            state.result = action.payload.result;
        });
        createLoadingReducers(builder, loginThunk);

        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
        createLoadingReducers(builder, registerThunk);
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;