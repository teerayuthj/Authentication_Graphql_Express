import React from "react";
import ReactDOM from "react-dom";
import ApolloClent from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./style/index.css";

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "same-origin"
});

const client = new ApolloClent({
  link,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
