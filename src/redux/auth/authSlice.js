import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { authOperations } from ".";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authOperations.getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        isAnyOf(
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addMatcher(
        isAnyOf(
          authOperations.logOut.fulfilled,
          authOperations.getCurrentUser.rejected
        ),
        (state) => {
          state.user = initialState.user;
          state.token = initialState.token;
          state.isLoggedIn = initialState.isLoggedIn;
        }
      )
      .addMatcher(
        isAnyOf(
          authOperations.getCurrentUser.fulfilled,
          authOperations.register.fulfilled,
          authOperations.logIn.fulfilled
        ),
        (state) => {
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(
          authOperations.getCurrentUser.fulfilled,
          authOperations.getCurrentUser.rejected
        ),
        (state) => {
          state.isRefreshing = false;
        }
      );
  },
});

export default authSlice.reducer;
