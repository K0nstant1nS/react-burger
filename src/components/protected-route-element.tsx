import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getUser } from "../services/actions/user";
import { getUserFromStore } from "../utils";
import { TRouteProps } from "../services/types/data";

const ProtectedRouteElement:FC<TRouteProps> = ({ element }) => {
  const dispatch = useDispatch();
  const { user, onLoad } = useSelector(getUserFromStore);
  const location = useLocation();

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

  return user ? (
    element
  ) : (
    <Navigate to={`/login?to=${location.pathname}`} replace={false} />
  );
};

export default ProtectedRouteElement;
