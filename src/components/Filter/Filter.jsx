import React from "react";
// import { filterContact } from "../redux/contacts/contacts-action";
import { contactsActions } from "../redux/contacts";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        name="filter"
        value={filter}
        onChange={(e) =>
          dispatch(contactsActions.filterContact(e.target.value))
        }
        type="text"
      />
    </>
  );
};

export default Filter;
