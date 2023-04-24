import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const items = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    deleteContact: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  },
});

const filter = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContact: (_, { payload }) => payload.toLowerCase(),
  },
});

const contactsSlice = combineReducers({
  [items.name]: items.reducer,
  [filter.name]: filter.reducer,
});

export const { filterContact } = filter.actions;
export const { addContact, deleteContact } = items.actions;

export default contactsSlice;
