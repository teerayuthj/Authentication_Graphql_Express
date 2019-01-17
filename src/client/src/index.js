import React from "react";
import ReactDOM from "react-dom";
import ApolloClent from "apollo-client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./style/index.css";
import Logout from "../src/components/Logout";

const cache = new InMemoryCache();

const HttpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "same-origin"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log("GraphQL error", message);

      if (message === "UNAUTHENTICATED") {
        Logout(client);
      }
    });
  }

  if (networkError) {
    console.log("Network error", networkError);

    if (networkError.statusCode === 401) {
      Logout(client);
    }
  }
});

const link = ApolloLink.from([errorLink, HttpLink]);

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
