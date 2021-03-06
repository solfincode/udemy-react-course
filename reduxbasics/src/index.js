import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "INCREMENT", incNum: 5 });
store.dispatch({ type: "DECREMENT", desNum: 3 });
store.dispatch({ type: "DECREMENT" });
