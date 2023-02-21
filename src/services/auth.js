import { createContext, useState, useContext } from "react";
import { getCookie, deleteCookie, setCookie } from "../utils";
import Api from "../API";

const UserContext = createContext(null);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
}

export function useAuth() {
  return useContext(UserContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loaded, setLoadStatus] = useState();

  const signUp = async (form) => {
    return await Api.registerUser(form).then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
      setUser(data.user);
    });
  };

  const signIn = async (form) => {
    return await Api.loginRequest(form).then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
      setUser(data.user);
    });
  };

  const getUser = async (isRefresh = false) => {
    return await Api.getUserRequest()
      .then((data) => {
        setUser(data.user);
        return true;
      })
      .catch(() => {
        if (isRefresh) {
          const refreshToken = getCookie("refreshToken");
          return Api.refreshTokenRequest(refreshToken).then(() => {
            return getUser();
          });
        } else {
          return true;
        }
      });
  };

  const logOut = async () => {};

  return {
    user,
    signUp,
    getUser,
    signIn,
    logOut,
  };
}
