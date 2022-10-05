import {configureStore} from "@reduxjs/toolkit"
import { itemsHandler } from "./reducers";


const store = configureStore({
  reducer: {
      contacts: itemsHandler,
    }
  },
);


export default store