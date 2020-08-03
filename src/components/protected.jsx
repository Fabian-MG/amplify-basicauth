import React from "react";
import Container from "./container";
import protectedRoute from "../protectedRoute.hook";

const Protected = ({ history }) => {
  return (
    <Container>
      <h1>Protected Route</h1>
    </Container>
  );
};

export default protectedRoute(Protected);
