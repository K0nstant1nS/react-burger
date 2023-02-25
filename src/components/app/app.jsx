import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import { getIngredients, getUserFromStore } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "../../services/actions/ingredients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructorPage from "../../pages/constructor/constructor";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ProfilePage from "../../pages/profile/profile";
import ProtectedRouteElement from "../protected-route-element";
import UnAuthRoute from "../un-auth-route";
import IngredientPage from "../../pages/ingredient/ingredient";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import { getUser } from "../../services/actions/user";
import ErrorPage from "../../pages/error/error";
import OrdersPage from "../../pages/orders/orders";
import Feed from "../../pages/feed/feed";
import OrderPage from "../../pages/order/order";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector(getUserFromStore);

  const { status } = useSelector(getIngredients);

  useEffect(() => {
    if (!user) {
      dispatch(getUser(true));
    }
    dispatch(initData());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        {status === "success" && (
          <Routes>
            <Route path="/" element={<ConstructorPage />} />
            <Route path="ingredients/:id" element={<IngredientPage />} />
            <Route
              path="/profile"
              element={<ProtectedRouteElement element={<ProfilePage />} />}
            >
              <Route
                path="orders"
                element={<ProtectedRouteElement element={<OrdersPage />} />}
              />
            </Route>
            <Route
              path="/login"
              element={<UnAuthRoute element={<LoginPage />} />}
            />
            <Route
              path="/register"
              element={<UnAuthRoute element={<RegisterPage />} />}
            />
            <Route
              path="/forgot-password"
              element={<UnAuthRoute element={<ForgotPasswordPage />} />}
            />
            <Route
              path="/reset-password"
              element={<UnAuthRoute element={<ResetPasswordPage />} />}
            />
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:id" element={<OrderPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
