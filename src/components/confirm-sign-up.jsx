import React from "react";
import Button from "./button";
import { styles } from "./form";

const ConfirmSignUp = ({ updateFormState, confirmSignUp }) => {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        placeholder="Confirmation Code"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
      />
      <Button onClick={confirmSignUp} title="Confirm Sign Up" />
    </div>
  );
};

export default ConfirmSignUp;
