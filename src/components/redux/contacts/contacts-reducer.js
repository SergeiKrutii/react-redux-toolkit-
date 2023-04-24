import { combineReducers } from "redux";
import { addContact, deleteContact, filterContact } from "./contacts-action";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], (builder) => {
  builder
    .addCase(addContact, (state, { payload }) => [...state, payload])
    .addCase(deleteContact, (state, { payload }) =>
      state.filter((contact) => contact.id !== payload)
    );
});

const filter = createReducer("", (builder) => {
  builder.addCase(filterContact, (_, { payload }) => {
    return payload.toLowerCase();
  });
});

const contactsReducer = combineReducers({
  items,
  filter,
});
export default contactsReducer;
