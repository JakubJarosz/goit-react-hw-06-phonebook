import React from "react";
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import { saveAction, deleteAction, refreshAction } from "redux/action";
import { useSelector, useDispatch} from "react-redux";


export const App = () => {
   
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handelFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const inputName = form.elements.name.value;
    const inputNumber = form.elements.number.value;
    const together = {id: uniqid(), name: inputName, number: inputNumber}
    dispatch(saveAction(together))
  }

  const deleteBtn = (evt) => {
    const clickedId = evt.currentTarget.id;
    const filteredItems = items.filter((el) => el.id === clickedId);
    dispatch(deleteAction(filteredItems));

  }

 
  
console.log(items)
  return (
    <div>
      <div>
      <h1>PhoneBook</h1>
        <form onSubmit={handelFormSubmit}>
        <input
          type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <br />
        <p>Number</p>
        <input
          type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
      </div>
      <div>
        <h2>Contacts</h2>
      <input/>
      </div>
      <ul>
        {items.map((el) =>
          <li key={el.id}>
            {el.name}  {el.number}
            <button id={el.id} onClick={deleteBtn}>Delete</button>
          </li>
        )}
      </ul>
   </div>
  );
};
