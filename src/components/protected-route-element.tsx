import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getUser, logoutAction } from "../services/actions/user";
import { getUserFromStore } from "../utils";
import { TRouteProps } from "../services/types/data";
import { getCookie } from "../utils";
import { closeUserOrdersSocketAction } from "../services/actions/orders";

const ProtectedRouteElement:FC<TRouteProps> = ({ element }) => {
  const dispatch = useDispatch();
  const { user, onLoad } = useSelector(getUserFromStore);
  const location = useLocation();
  const refreshToken = getCookie("refreshToken")

  const init = () => {
    dispatch(getUser(true));
  };

  useEffect(() => {
    if (!user) {
      init();
    }
  }, []);

  if (onLoad) {
    return null;
  }

  if(!refreshToken && user){
    dispatch(closeUserOrdersSocketAction());
    dispatch(logoutAction())
  }

  return (user) ? (
    element
  ) : (
    <Navigate to={`/login?to=${location.pathname}`} replace={false} />
  );
};

export default ProtectedRouteElement;
