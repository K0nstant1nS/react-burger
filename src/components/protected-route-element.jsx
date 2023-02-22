import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../services/actions/user";
import PropTypes from "prop-types";
import { getUserFromStore } from "../utils";

function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch();
  const { user, onLoad } = useSelector(getUserFromStore);

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

  return user ? element : <Navigate to="/login" replace={false} />;
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.element,
};

export default ProtectedRouteElement;
