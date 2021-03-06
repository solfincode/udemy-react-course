import { combineReducers } from "redux";

//reducers
import CounterReducer from "./counterReducer";
import ExpensesReducer from "./expensesReducer";
import FilterReducer from "./filterReducer";

export default combineReducers({
  counts: CounterReducer,
  expenses: ExpensesReducer,
  filters: FilterReducer,
});
