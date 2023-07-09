import classNames from "classnames";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useMount } from "../../hooks/use-mount";
import { loadRestaurants } from "../../redux/features/restaurant/actions";
import { selectDishAmount } from "../../redux/features/cart/selectors";
import { decrement, increment } from "../../redux/features/cart/actions";
import { loadRestaurantsThunk } from "../../redux/features/restaurant/thunk/loadRestaurants";

const MOCK_DISH_ID = "1";

// interface Props extends HTMLProps<HTMLButtonElement> {
//     viewVariant:
// }

export function RestaurantsPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const amount = useSelector((state) => selectDishAmount(state, MOCK_DISH_ID));

  useMount(() => {
    dispatch(loadRestaurantsThunk());
  });

  return (
    <div>
      RestaurantsPage
      <div>
        <button onClick={() => navigate("Restaurant3", { replace: true })}>
          Navigate
        </button>
        <NavLink
          to="Restaurant1"
          className={({ isActive }) =>
            classNames({ [styles.active]: isActive })
          }
        >
          Restaurant 1
        </NavLink>
        <NavLink
          to="Restaurant2"
          className={({ isActive }) =>
            classNames({ [styles.active]: isActive })
          }
        >
          Restaurant 2
        </NavLink>
      </div>
      <Outlet />
      <div>
        <button onClick={() => dispatch(increment(MOCK_DISH_ID))}>+</button>
        {amount}
        <button onClick={() => dispatch(decrement(MOCK_DISH_ID))}>-</button>
      </div>
    </div>
  );
}
