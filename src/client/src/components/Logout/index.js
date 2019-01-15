import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "grommet";
import { ApolloConsumer } from "react-apollo";
import { Helmet } from "react-helmet";

const handleSigout = (client, history) => {
  client.resetStore();
  history.push("/login");
};

const logut = ({ history }) => (
  <ApolloConsumer>
    {client => {
      return (
        <div>
          <Helmet>
            <title>Logout</title>
          </Helmet>
          <Button
            label="Logout"
            onClick={() => handleSigout(client, history)}
          />
        </div>
      );
    }}
  </ApolloConsumer>
);
export default withRouter(logut);
