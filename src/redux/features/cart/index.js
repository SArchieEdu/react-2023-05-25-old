import { CART_ACTIONS } from "./actions";

const initialState = {};

export const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CART_ACTIONS.increment: {
      return {
        ...state,
        [payload]: (state[payload] || 0) + 1,
      };
    }
    case CART_ACTIONS.decrement: {
      if (!state[payload]) {
        return state;
      }

      return {
        ...state,
        [payload]: state[payload] - 1,
      };
    }
    case CART_ACTIONS.reset:
      return initialState;

    default:
      return state;
  }
};
