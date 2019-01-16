import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../constants/routes";
import Logout from "../Logout";

const Navigation = ({ session }) => (
  <div>
    {session && session.user ? (
      <NavigationAuth session={session} />
    ) : (
      <NavigationNonAuth />
    )}
  </div>
);

const NavigationAuth = ({ session }) => (
  <div>
    {session && session.user && session.user.email === "DASHBOARD" && (
      <li>
        <Link to={routes.DASHBOARD}>DASHBOARD</Link>
      </li>
    )}
    <li>
      <Logout />
    </li>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LOG_IN}>LOG In</Link>
    </li>
  </ul>
);

export default Navigation;
