import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loadRestaurants } from "./features/restaurant/middleware/loadRestaurants";
import { thunk } from "./middleware/thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, loadRestaurants))
);
