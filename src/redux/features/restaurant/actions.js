export const RESTAURANT_ACTIONS = {
  startLoading: "restaurant/startLoading",
  finishLoading: "restaurant/finishLoading",
  failLoading: "restaurant/failLoading",
  loadRestaurants: "restaurant/loadRestaurants",
};

export const startLoadingRestaurants = () => ({
  type: RESTAURANT_ACTIONS.startLoading,
});
export const finishLoadingRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTIONS.finishLoading,
  payload: restaurants,
});
export const failLoadingRestaurants = () => ({
  type: RESTAURANT_ACTIONS.failLoading,
});
export const loadRestaurants = () => ({
  type: RESTAURANT_ACTIONS.loadRestaurants,
});
