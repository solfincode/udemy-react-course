import { INCREMENT, DECREMENT, RESET, SET } from "../actions/counterAction";

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
    case SET:
      return {
        count: action.count,
      };
    default:
      return state;
  }
}
