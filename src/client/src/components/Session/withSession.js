import React from "react";
import { Query } from "react-apollo";

import { CURRENT_USER } from "../../queries";

const withSession = Component => props => (
  <Query query={CURRENT_USER}>
    {({ data, refetch }) => {
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default withSession;
