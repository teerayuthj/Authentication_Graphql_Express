import React from "react";
import ReactDOM from "react-dom";
import ApolloClent from "apollo-client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ThemeProvider } from "styled-components";
//import { ApolloLink } from "apollo-link";
//import { ApolloClient } from "apollo-client";
//import { HttpLink } from "apollo-link-http";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./style/index.css";
import Logout from "../src/components/Logout";
import { theme } from "./style/globalStyle";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include"
});
const errorLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    Logout();
  }
});

const link = errorLink.concat(httpLink);
const cache = new InMemoryCache();

const client = new ApolloClent({
  link,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
