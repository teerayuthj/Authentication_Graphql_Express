import React from "react";
import { CURRENT_USER } from "../../queries";
import { Query } from "react-apollo";

const withSession = Component => props => (
  <Query query={CURRENT_USER}>
    {({ data, loading, refetch }) => {
      if (loading) return null;
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default withSession;
