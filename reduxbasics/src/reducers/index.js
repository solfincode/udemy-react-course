import { INCREMENT, DECREMENT, RESET } from "../actions";

export default function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      const incNum = typeof action.incNum === "number" ? action.incNum : 1;
      return {
        count: state.count + incNum,
      };
    case DECREMENT:
      const desNum = typeof action.desNum === "number" ? action.desNum : 1;
      return {
        count: state.count - desNum,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
}
