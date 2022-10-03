import {configureStore} from "@reduxjs/toolkit"
import { itemsHandler } from "./reducers";


const store = configureStore({
  reducer: {
      items: itemsHandler,
      filter: ''
    }
  },
);


export default store