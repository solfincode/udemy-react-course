import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./reducers";
import { addExpense } from "./actions/expensesAction";
import { setTextFilter } from "./actions/filterAction";
const store = createStore(RootReducer);
setTimeout(() => {
  store.dispatch(addExpense({ description: "water bill", amount: 2000 }));
  store.dispatch(addExpense({ description: "gas bill", amount: 332000 }));
  store.dispatch(addExpense({ description: "fuel bill", amount: 9000 }));
  store.dispatch(setTextFilter("bill"));
  console.log(store.getState());
}, 2000);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
