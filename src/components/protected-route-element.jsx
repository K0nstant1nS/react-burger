import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUser } from "../services/actions/user";
import { getUserFromStore } from "../utils";

function ProtectedRouteElement({ element }) {
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
}

export default ProtectedRouteElement;
