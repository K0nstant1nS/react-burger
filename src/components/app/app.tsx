import React, { useEffect, FC } from "react";
import AppHeader from "../app-header/app-header";
import { getIngredients, getUserFromStore } from "../../utils";
import { useDispatch, useSelector } from "../../services/hooks";
import { initData } from "../../services/actions/ingredients";
import { HashRouter, Routes, Route } from "react-router-dom";
import ConstructorPage from "../../pages/constructor/constructor";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ProfilePage from "../../pages/profile/profile";
import ProtectedRouteElement from "../protected-route-element";
import UnAuthRoute from "../un-auth-route";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import { getUser } from "../../services/actions/user";
import ErrorPage from "../../pages/error/error";
import Feed from "../../pages/feed/feed";

const App: FC = () => {
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
    <HashRouter>
      <div className="app">
        <AppHeader />
        {status === "success" && (
          <Routes>
            <Route path="/*" element={<ConstructorPage />} />
            <Route
              path="/profile/*"
              element={<ProtectedRouteElement element={<ProfilePage />} />}
            />
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
            <Route path="/feed/*" element={<Feed />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>
    </HashRouter>
  );
}

export default App;
