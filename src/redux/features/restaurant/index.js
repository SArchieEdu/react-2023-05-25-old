import { RESTAURANT_ACTIONS } from "./actions";

const initialState = {
  entities: {},
  ids: [],
  status: "idle",
};

export const restaurantReducer = (
  state = initialState,
  { type, payload } = {}
) => {
  switch (type) {
    case RESTAURANT_ACTIONS.startLoading: {
      return {
        ...state,
        status: "loading",
      };
    }
    case RESTAURANT_ACTIONS.finishLoading: {
      return {
        entities: payload.reduce(
          (acc, restaurant) => (acc[restaurant.id] = restaurant),
          state.entities
        ),
        ids: [...new Set([...state.ids, ...payload.map(({ id }) => id)])],
        status: "success",
      };
    }
    case RESTAURANT_ACTIONS.failLoading: {
      return {
        ...state,
        status: "failed",
      };
    }

    default:
      return state;
  }
};
