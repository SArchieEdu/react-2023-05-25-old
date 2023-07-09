import {
  RESTAURANT_ACTIONS,
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "../actions";

export const loadRestaurants = (store) => (next) => (action) => {
  if (action.type !== RESTAURANT_ACTIONS.loadRestaurants) {
    return next(action);
  }

  store.dispatch(startLoadingRestaurants());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(finishLoadingRestaurants(restaurants))
    )
    .catch(() => {
      store.dispatch(failLoadingRestaurants());
    });
};
