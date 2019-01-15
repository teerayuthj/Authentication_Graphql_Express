import React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";

import { CURRENT_USER } from "../../queries";

const withAuth = conditionFn => Component => props => {
  return (
    <Query query={CURRENT_USER}>
      {({ data, networkStatus }) => {
        if (networkStatus < 7) {
          return null;
        }

        return conditionFn(data) ? (
          <Component {...props} />
        ) : (
          <Redirect to="login" />
        );
      }}
    </Query>
  );
};

export default withAuth;
