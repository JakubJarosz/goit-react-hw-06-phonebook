import { createReducer } from "@reduxjs/toolkit";
import { SAVE, DELETE, REFRESH } from "./action";

const initialItems = {
  items: [],
  filter: '',
};


const itemsHandler = createReducer(initialItems, {
  [SAVE]: (state, action) => ({
    ...state,
    items: [...state.items, action.payload],
  }),
  [DELETE]: (state, action) => ({
    ...state,
    items: state.items.filter(function (array_el) {
      return (
        action.payload.filter(function (anotherOne_el) {
          return anotherOne_el.id == array_el.id;
        }).length == 0
      );
    }),
  }),
  [REFRESH]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});



export { itemsHandler }

