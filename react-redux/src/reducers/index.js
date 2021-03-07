import { combineReducers } from "redux";

//reducers
import ExpensesReducer from "./expensesReducer";
import FilterReducer from "./filterReducer";

export default combineReducers({
  expenses: ExpensesReducer,
  filters: FilterReducer,
});
