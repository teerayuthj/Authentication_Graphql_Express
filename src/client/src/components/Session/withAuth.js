import React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { CURRENT_USER } from "../../queries";
//import * as Cookies from "es-cookie";
import Login from "../Login";

const withAuth = conditionFunc => Component => props => {
  if (props.unitTesting === "ture") {
    return <Component {...props} />;
  }

  return (
    <Query query={CURRENT_USER}>
      {({ data, loading, error, refetch }) => {
        if (loading) return null;
        /*
        if (typeof document !== "undefined") {
          const tokenExp = Cookies.get("token//");

          if (tokenExp === undefined)
            return <Login {...props} refetch={refetch} />;
        }
*/
        if (props.session.currentUser === null)
          return <Login {...props} refetch={refetch} />;

        return conditionFunc(data) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </Query>
  );
};

export default withAuth;
