import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const protectedRoute = (Comp, route = "/profile") => (props) => {
  const [auth, setAuth] = useState(null);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (error) {
      props.history.push(route);
    }
  }

  useEffect(() => {
    checkAuthState();
    setAuth(true);
  }, []);

  return auth ? <Comp {...props} /> : null;
};

export default protectedRoute;
