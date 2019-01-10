import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "grommet";
import { LOGOUT_USER } from "../queries";
import { Mutation } from "react-apollo";
import ErrorMessage from "./error";

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
