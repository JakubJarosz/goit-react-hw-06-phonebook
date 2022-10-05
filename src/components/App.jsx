import React from "react";
import uniqid from "uniqid";
import { saveAction, deleteAction, refreshAction } from "redux/action";
import { useSelector, useDispatch } from "react-redux";
import Phonebook from "./phonebook";
import Contacts from "./contacts";
import Listofcontacts from "./listofcontacts";


export const App = () => {
   
  const items = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();


  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputName = form.elements.name.value;
    const inputNumber = form.elements.number.value;
    const together = { id: uniqid(), name: inputName, number: inputNumber };
    const filteredName = items.map((el) => el.name)
    if (filteredName.includes(together.name)) {
      alert("The name is already in the phonebook")
    } else {
      dispatch(saveAction(together))
    }
  }

  const deleteBtn = (evt) => {
    const clickedId = evt.currentTarget.id;
    const filteredItems = items.filter((el) => el.id === clickedId);
    dispatch(deleteAction(filteredItems));
  }

  const inputFilter = (evt) => {
    const filter = evt.target.value;
    dispatch(refreshAction(filter));
 }
  

  return (
    <div>
      <Phonebook
      handelFormSubmit={handelFormSubmit}
      />
      <Contacts
        inputFilter={inputFilter}/>
      <Listofcontacts
        items={items}
        filter={filter}
        deleteBtn={deleteBtn}
      />
   </div>
  );
};
