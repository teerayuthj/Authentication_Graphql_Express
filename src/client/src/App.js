import React, { Component } from "react";
import ApolloClent from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

const client = new ApolloClent({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
