import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import withSession from "../../Session/withSession";

class Headers extends Component {
  render() {
    return (
      <Fragment>
        <Header as="h3" textAlign="right">
          Ausiris
        </Header>
        {this.props.session.user === null && (
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
        {this.props.session.user != null && (
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="logout">Logout</NavLink>
            </li>
          </ul>
        )}
      </Fragment>
    );
  }
}

export default withSession(Headers);
