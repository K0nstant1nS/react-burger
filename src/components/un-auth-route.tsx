import React, {FC} from "react";

import { useSelector } from "../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { getUserFromStore } from "../utils";
import { TRouteProps } from "../services/types/data";

const UnAuthRoute: FC<TRouteProps> = ({ element }) => {
  const { user } = useSelector(getUserFromStore);
  const location = useLocation();
  const to = location.search.split("to=")[1];

  if (user) {
    return <Navigate to={to ? to : "/"} replace={true} />;
  }

  return element;
}

export default UnAuthRoute;
