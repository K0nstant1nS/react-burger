import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../services/auth";

function ProtectedRouteElement({ element }) {
  const { user, setUser, getUser } = useAuth();
  const [loaded, setLoaded] = useState(false);

  const init = async () => {
    const status = await getUser();
    setLoaded(status);
  };

  useEffect(() => {
    if (!user) {
      init();
    } else {
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return null;
  }
  console.log(user);

  return user ? element : <Navigate to="/login" />;
}

export default ProtectedRouteElement;
