import React, { Component, Fragment } from "react";
//import { Header, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import withSession from "../../Session/withSession";

class Headers extends Component {
  render() {
    return (
      <Fragment>
        <div>
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
        </div>
      </Fragment>
    );
  }
}

export default withSession(Headers);
