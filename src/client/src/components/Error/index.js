import React from "react";

const ErrorMessage = ({ error }) => (
  <div style={{ textAlign: "center", margin: "5px", color: "red" }}>
    <small>
      {error.graphQLErrors.map(x => x.message)}
      {console.error("ERR =>", error.graphQLErrors.map(x => x.message))}
    </small>
  </div>
);

export default ErrorMessage;
