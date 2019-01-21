import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "grommet";
import { Mutation } from "react-apollo";

import { LOGOUT_USER } from "../../queries";
import ErrorMessage from "../Error";

const initialState = {
  id: "",
  email: ""
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
    const { id, email } = this.state;
    return (
      <div>
        <Mutation mutation={LOGOUT_USER} variables={{ id, email }}>
          {(logout, { data, loading, error }) => {
            return (
              <div>
                <Button
                  label="Log Out"
                  onClick={async e => {
                    e.preventDefault();
                    await logout({
                      variables: { id, email },
                      refetchQueries: { id, email }
                    });
                    this.props.cleint.resetStore();
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
