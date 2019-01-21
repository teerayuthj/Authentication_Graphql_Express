import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navs, Logo, NavRight, NavLogout } from "../../../style/Navs";

import withSession from "../../Session/withSession";

class Headers extends Component {
  render() {
    return (
      <Navs>
        {this.props.session.user === null && (
          <div>
            <Logo>Ausiris</Logo>
            <NavRight>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                Login
              </NavLink>
            </NavRight>
          </div>
        )}
        {this.props.session.user != null && (
          <div>
            <Logo>
              <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
                Dashboard
              </NavLink>
            </Logo>
            <NavLogout>
              <NavLink to="/logout" style={{ textDecoration: "none" }}>
                Logout
              </NavLink>
            </NavLogout>
          </div>
        )}
      </Navs>
    );
  }
}

export default withSession(Headers);
