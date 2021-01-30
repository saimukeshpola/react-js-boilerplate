import {
  SAY_GOOD_MORNING,
  SAY_GOOD_AFTERNOON,
  SAY_GOOD_NIGHT,
} from "../actionTypes";
import { GreetingStore, ReduxAction } from "../redux-store.types";

const generateGreeting = (type: string) => {
  return `Hello. Good ${type}. Hope you are doing great`;
};

const initialState: GreetingStore = {
  message: generateGreeting("Morning"),
};

const GreetingReducer = (
  state: GreetingStore = initialState,
  action: ReduxAction
) => {
  switch (action.type) {
    case SAY_GOOD_MORNING: {
      return {
        ...state,
        message: generateGreeting("Morning"),
      };
    }
    case SAY_GOOD_AFTERNOON: {
      return {
        ...state,
        message: generateGreeting("Afternoon"),
      };
    }
    case SAY_GOOD_NIGHT: {
      return {
        ...state,
        message: generateGreeting("Night"),
      };
    }
    default:
      return state;
  }
};

export default GreetingReducer;
