import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { HomePage } from "./pages/home/component";
import { RestaurantsPage } from "./pages/restaurants/component";
import { NotFoundPage } from "./pages/404/component";
import { Layout } from "./components/layout/component";
import { RestaurantPage } from "./pages/restaurant/component";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />}>
              <Route index element={<div>SelectRestaurant</div>} />
              <Route path="Restaurant1" element={<div>Hello </div>} />
              <Route path=":restaurantId" element={<RestaurantPage />}>
                <Route index element={<Navigate to="menu" replace />} />
                <Route path="menu" element={<div>Menu</div>} />
                <Route path="review" element={<div>Review</div>} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
