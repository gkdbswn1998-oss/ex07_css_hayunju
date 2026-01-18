import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: { username: "", password: "" }, // [cite: 9]
  reducers: {
    changeInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetInput: (state) => {
      state.username = "";
      state.password = "";
    }
  }
});

export const { changeInput, resetInput } = inputSlice.actions;
export default inputSlice.reducer;