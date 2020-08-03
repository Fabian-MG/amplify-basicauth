import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Container from "./container";

const Protected = ({ history }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser().catch(() => {
      history.push("/profile");
    });
    setAuth(true);
  }, []);

  return auth ? (
    <Container>
      <h1>Protected Route</h1>
    </Container>
  ) : null;
};

export default Protected;
