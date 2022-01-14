import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user"; // to nasz userSlice.reducer lub userSlice
import themeReducer from "./features/theme"; // to nasz themeSlice.reducer lub themeSlice
// import { combineReducers } from "@reduxjs/toolkit";
// import { createReducer } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
