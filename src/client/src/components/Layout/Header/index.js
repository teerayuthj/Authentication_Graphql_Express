import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Navs, Logo, NavRight } from "../../../style/Navs";

import withSession from "../../Session/withSession";

class Headers extends Component {
  render() {
    return (
      <Navs>
        {this.props.session.user === null && (
          <div>
            <Logo>Ausiris</Logo>
            <NavRight>
              <NavLink to="/login">Login</NavLink>
            </NavRight>
          </div>
        )}
        {this.props.session.user != null && (
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <NavLink to="logout">Logout</NavLink>
          </ul>
        )}
      </Navs>
    );
  }
}

export default withSession(Headers);
