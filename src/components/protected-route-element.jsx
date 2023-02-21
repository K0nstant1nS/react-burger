import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../services/actions/user";

function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch();
  const { user, onLoad } = useSelector((store) => store.user);

  const init = () => {
    dispatch(getUser());
  };

  useEffect(() => {
    if (!user) {
      init();
    }
  }, []);

  if (onLoad) {
    return null;
  }

  return user ? element : <Navigate to="/login" />;
}

export default ProtectedRouteElement;
