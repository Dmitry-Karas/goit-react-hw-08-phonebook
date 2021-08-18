import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhonebookAPI } from "services/phonebookApi";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const data = await PhonebookAPI.register(credentials);

    return data;
  }
);

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  const data = await PhonebookAPI.logIn(credentials);

  return data;
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  await PhonebookAPI.logOut();
});
