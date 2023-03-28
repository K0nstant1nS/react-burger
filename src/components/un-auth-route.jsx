import React from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserFromStore } from "../utils";

function UnAuthRoute({ element }) {
  const { user } = useSelector(getUserFromStore);
  const location = useLocation();
  const to = location.search.split("to=")[1];

  if (user) {
    return <Navigate to={to ? to : "/"} replace={true} />;
  }

  return element;
}

export default UnAuthRoute;
