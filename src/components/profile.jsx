import React, { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

import Container from "./container";
import Form from "./form";
import Button from "./button";

const Profile = () => {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = {
        username: data.username,
        ...data.attributes,
      };
      setUser(userInfo);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    checkUser();
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);

  const signOut = () => {
    Auth.signOut().catch((err) => console.log("error signing out: ", err));
  };

  return user ? (
    <Container>
      <h1>Profile</h1> <h2>Username: {user.username}</h2>{" "}
      <h3>Email: {user.email}</h3> <h4>Phone: {user.phone_number}</h4>{" "}
      <Button onClick={signOut} title="Sign Out" />
    </Container>
  ) : (
    <Form setUser={setUser} />
  );
};

export default Profile;
