import { createSlice } from "@reduxjs/toolkit";
// import { Products } from "../data";
import { Products } from "../../data";

const initialState = {
  Products,
  addtoCart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCartUser: (state, action) => {
      state.addtoCart.push(action.payload);
      console.log(initialState.addtoCart);
      
      // console.log(state.addtoCart.push({ ...action }));
    },
  },
});


export const { addCartUser } = userSlice.actions;

export default userSlice.reducer;
