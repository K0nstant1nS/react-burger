import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../services/actions/auth";

function ProtectedRouteElement({ element }) {
  const { user, loaded } = useSelector((store) => store);
  const dispatch = useDispatch();

  const init = () => {
    dispatch(getUser());
  };

  useEffect(() => {
    init();
  }, []);

  return element;
}

export default ProtectedRouteElement;
