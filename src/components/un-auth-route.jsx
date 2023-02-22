import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserFromStore } from "../utils";

function UnAuthRoute({ element }) {
  const { user } = useSelector(getUserFromStore);

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return element;
}

export default UnAuthRoute;
