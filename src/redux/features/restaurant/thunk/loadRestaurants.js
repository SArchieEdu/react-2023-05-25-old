import {
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "../actions";

export const loadRestaurantsThunk = () => (dispatch, getState) => {
  dispatch(startLoadingRestaurants());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) => dispatch(finishLoadingRestaurants(restaurants)))
    .catch(() => {
      dispatch(failLoadingRestaurants());
    });
};
