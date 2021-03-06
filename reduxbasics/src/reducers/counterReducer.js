import { INCREMENT, DECREMENT, RESET } from "../actions/counterAction";

export default function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.incNum,
      };
    case DECREMENT:
      return {
        count: state.count - action.decNum,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
}
