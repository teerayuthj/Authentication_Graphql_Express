import React from "react";
import ReactDOM from "react-dom";
import ApolloClent from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./style/index.css";

const client = new ApolloClent({
  uri: "http://localhost:5000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
