import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import reducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
