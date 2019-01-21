import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "grommet";
import { Mutation } from "react-apollo";

import { LOGOUT_USER } from "../../queries";
import ErrorMessage from "../Error";

const initialState = {
  email: "",
  password: ""
};

class Logout extends Component {
  constructor(props) {
    super();

    this.state = {
      ...initialState
    };
  }
  clearState() {
    this.setState({ ...initialState });
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Mutation mutation={LOGOUT_USER} variables={{ email, password }}>
          {(logout, { data, loading, error }) => {
            return (
              <div>
                <Button
                  label="Log Out"
                  onClick={async e => {
                    e.preventDefault();
                    await logout({
                      variables: { email, password },
                      refetchQueries: { email, password }
                    });
                    this.props.refetch();
                    this.clearState();
                    this.props.history.push("/login");
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
export default withRouter(Logout);
