import React from "react";
import styled from "styled-components";
// import { deleteContact } from "../redux/contacts/contacts-action";
import { contactsActions } from "../redux/contacts";
import { useDispatch, useSelector } from "react-redux";

const Button = styled.button({
  border: "1px solid black",
  marginLeft: 33,
  borderRadius: 5,
  cursor: "pointer",
});
const Li = styled.li({
  marginTop: 5,
  marginBottom: 5,
  padding: 6,
  border: "1px solid black",
  width: 300,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
});
const Ul = styled.ul({
  listStyle: "square",
  width: 300,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

const ContactList = () => {
  const { filter, items } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const getFilteredContacts = (items, filter) => {
    return items.filter((contact) => contact.name.includes(filter));
  };

  const filteredContacts = getFilteredContacts(items, filter);

  return (
    <Ul>
      {filteredContacts.map((contact) => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          {/* <Button onClick={() => dispatch(deleteContact(contact.id))}> */}
          <Button
            onClick={() => dispatch(contactsActions.deleteContact(contact.id))}
          >
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactList;
