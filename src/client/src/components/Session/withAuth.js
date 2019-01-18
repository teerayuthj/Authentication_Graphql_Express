import React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";

import { CURRENT_USER } from "../../queries";
import Login from "../Login";

const withAuth = conditionFn => Component => props => {
  if (props.unitTesting === "true") {
    return <Component {...props} />;
  }

  return (
    <Query query={CURRENT_USER}>
      {({ data, loading, error, refetch }) => {
        if (loading) return null;

        if (props.session.user == null)
          return <Login {...props} refetch={refetch} />;

        return conditionFn(data) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </Query>
  );
};

export default withAuth;
