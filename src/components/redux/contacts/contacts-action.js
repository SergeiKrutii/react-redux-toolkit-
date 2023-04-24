import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/item_add");
const deleteContact = createAction("contact/item_delete");
const filterContact = createAction("contact/filter_change");

export { addContact, deleteContact, filterContact };
