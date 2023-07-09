export const CART_ACTIONS = {
  increment: "cart/increment",
  decrement: "cart/decrement",
  reset: "cart/reset",
};

export const increment = (dishId) => ({
  type: CART_ACTIONS.increment,
  payload: dishId,
});

export const decrement = (dishId) => ({
  type: CART_ACTIONS.decrement,
  payload: dishId,
});

export const reset = () => ({
  type: CART_ACTIONS.reset,
});
