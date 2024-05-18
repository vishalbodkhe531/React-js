import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ?JSON.parse(localStorage.getItem("currentUser"))
        : null,
    loading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInFialure: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    // deleteUser: (state) => {
    //   state.currentUser = null;
    //   localStorage.clear();
    // },

    // logoutUser: (state) => {
    //   state.currentUser = null;
    //   localStorage.clear();
    // },
  },
});

export const { signInStart, signInFialure, signInSuccess, deleteUser, logoutUser } = userSlice.actions;

export default userSlice.reducer