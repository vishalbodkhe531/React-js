import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../data";

const initialState = {
  Products,
  cartArr: [],
  selectedCart: {},
  likeCartArr: [],
  toggleLike: false,
};

const userSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCartUser: (state, action) => {
      state.cartArr.push(action.payload);
    },

    productInfo: (state, action) => {
      state.selectedCart = action.payload;
    },

    likeProducts: (state, action) => {
      console.log(action.payload);
      state.toggleLike = !action.payload.toggleLike;
      state.likeCartArr.push(action.payload.selectedCartInfo);
    },

    // removeItem: (state, action) => {
    //   state.cartArr = state.cartArr.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    // cancleItem: (state, action) => {
    //   const result = state.Products.map((item) =>
    //     item.id === action.payload ? { ...item, result: !item.result } : item
    //   );
    // },
  },
});

export const { addCartUser, productInfo, cancleItem, likeProducts } =
  userSlice.actions;

export default userSlice.reducer;
