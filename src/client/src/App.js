import React, { Component } from "react";
import ApolloClent from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Head from "./components/Head";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";

const client = new ApolloClent({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" component={Head} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
