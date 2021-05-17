import { createStore } from "redux";
import RootReducer from "./reducers/index";

//actioin creator
import { incCount, decCount, reset, set } from "./actions/counterAction"; //action creator
import {
  addExpense,
  removeExpense,
  editExpense,
} from "./actions/expensesAction"; //action creator

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filterAction"; //action creator

const getVisibleExpenses = (expenses, { text, sortBy, startData, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(RootReducer);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("state", store.getState());
  console.log("visibleExpenses", visibleExpenses);
});

//dispatch for counter
store.dispatch(incCount({ incNum: 5 }));
store.dispatch(decCount({ decNum: 3 }));
store.dispatch(reset());
store.dispatch(set({ count: 101 }));

//dispatch for expenses
const expenseTwo = store.dispatch(
  addExpense({ description: "rent Fee", amount: 100, createdAt: 1000 })
);
const expenseOne = store.dispatch(
  addExpense({ description: "coffee", amount: 200, createdAt: -1000 })
);

store.dispatch(editExpense(expenseOne.expense.id, { amount: 20000 }));

store.dispatch(setTextFilter("coffee"));
store.dispatch(sortByAmount()); //amount
store.dispatch(sortByDate()); // date
store.dispatch(setStartDate(12));
store.dispatch(setEndDate(1250));
store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
