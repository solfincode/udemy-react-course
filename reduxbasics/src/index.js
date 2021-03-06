import { createStore } from "redux";
import RootReducer from "./reducers/index";
import { incCount, decCount, reset } from "./actions/counterAction"; //action creator
import {
  addExpense,
  removeExpense,
  editExpense,
} from "./actions/expensesAction"; //action creator

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "./actions/filterAction"; //action creator

const store = createStore(RootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incCount({ incNum: 5 }));
store.dispatch(decCount({ decNum: 3 }));
store.dispatch(reset());
const expenseTwo = store.dispatch(
  addExpense({ description: "rent Fee", amount: 100 })
);
const expenseOne = store.dispatch(
  addExpense({ description: "rent good", amount: 200 })
);

store.dispatch(editExpense(expenseOne.expense.id, { amount: 20000 }));
store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
store.dispatch(setTextFilter("rent filter"));
store.dispatch(sortByAmount());
