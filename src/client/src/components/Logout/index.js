import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "grommet";
import { ApolloConsumer } from "react-apollo";
import { Helmet } from "react-helmet";

import * as routes from "../constants/routes";
import history from "../constants/history";

const handleSigout = client => {
  client.resetStore();
  history.push(routes.LOG_IN);
};

const Logout = () => (
  <ApolloConsumer>
    {client => {
      return (
        <div>
          <Helmet>
            <title>Logout</title>
          </Helmet>
          <Button label="Logout" onClick={() => handleSigout(client)} />
        </div>
      );
    }}
  </ApolloConsumer>
);
export default withRouter(handleSigout);

export { Logout };
