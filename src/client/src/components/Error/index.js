import React from "react";

const ErrorMessage = ({ error }) => (
  <div style={{ textAlign: "center", margin: "5px", color: "red" }}>
    <small>{error.message}</small>
  </div>
);

export default ErrorMessage;
