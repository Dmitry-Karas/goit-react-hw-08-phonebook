import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
  isRefreshing: false,
  isLoading: false,
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
      .addCase(authOperations.getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.getCurrentUser.rejected, (state) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
        state.isRefreshing = false;
      })
      .addCase(authOperations.logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authOperations.logIn.rejected, (state) => {
        state.isLoading = false;
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
