import React from "react";
import Button from "./button";
import { styles } from "./form";

function ForgotPassword({ updateFormState, forgotPassword }) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        placeholder="Username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
      />
      <Button onClick={forgotPassword} title="Reset password" />
    </div>
  );
}

export default ForgotPassword;
