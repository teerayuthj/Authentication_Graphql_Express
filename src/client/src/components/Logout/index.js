import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "grommet";
import { Mutation } from "react-apollo";

import { LOGOUT_USER } from "../../queries";
import ErrorMessage from "../Error";

class logut extends Component {
  render() {
    return (
      <div>
        <Mutation mutation={LOGOUT_USER}>
          {(logut, { data, loading, error }) => {
            return (
              <div>
                <Button
                  label="Log Out"
                  onClick={async e => {
                    e.preventDefault();
                    await logut({
                      refetchQueries: { logut }
                    });
                    this.props.history.replace("/login");
                  }}
                />
                {error && <ErrorMessage error={error} />}
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
export default withRouter(logut);
