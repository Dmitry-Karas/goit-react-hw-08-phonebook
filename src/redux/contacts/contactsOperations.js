import { createAsyncThunk } from "@reduxjs/toolkit";
import { PhonebookAPI } from "services/phonebookApi";

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await PhonebookAPI.fetchContacts();

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const data = await PhonebookAPI.addContact(contact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await PhonebookAPI.deleteContact(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
