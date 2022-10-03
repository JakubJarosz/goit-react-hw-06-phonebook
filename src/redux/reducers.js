import { createReducer } from "@reduxjs/toolkit";
import { SAVE, DELETE, REFRESH } from "./action";

const initialItems = [];
const initialFilter = "";

const itemsHandler = createReducer(initialItems, {
  [SAVE]: (state, action) => [...state, action.payload],
    [DELETE]: (state, action) => [...state.filter(function (mainElement) {
        return action.payload.filter(function (secElement) {
            return mainElement.id == secElement.id;
      }).length == 0
  })],
});

const filterHandler = createReducer(initialFilter, {
    [REFRESH]: (state, action) => [...state, action.payload]
})

export {itemsHandler}