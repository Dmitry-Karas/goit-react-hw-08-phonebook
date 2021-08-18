import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
      })
      .addMatcher(
        isAnyOf(
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export default authSlice.reducer;
