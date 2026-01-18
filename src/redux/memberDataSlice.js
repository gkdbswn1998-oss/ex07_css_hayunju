import { createSlice } from "@reduxjs/toolkit";
import { 
    getMemberListThunk, 
    deleteMemberThunk, 
    updateMemberThunk 
} from "../service/authThunk";
import { createLoadingReducers } from "./commonLoadingHandlers";

const memberDataSlice = createSlice({
    name: "member",
    initialState: { 
        members: [], 
        loading: false, 
        error: null 
    },
    reducers: {},
    extraReducers: (builder) => {
   
        builder.addCase(getMemberListThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.members = action.payload;
        });
        createLoadingReducers(builder, getMemberListThunk);


        builder.addCase(deleteMemberThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.members = state.members.filter(m => m.username !== action.payload);
        });
        createLoadingReducers(builder, deleteMemberThunk);

        builder.addCase(updateMemberThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.members = state.members.map(m => 
                m.username === action.payload.username ? action.payload : m
            );
        });
        createLoadingReducers(builder, updateMemberThunk);
    }
});

export default memberDataSlice.reducer;