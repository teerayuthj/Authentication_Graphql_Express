import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import { Box, Button, FormField, TextInput, Grommet, Paragraph } from "grommet";
import { grommet } from "grommet/themes";
import { Helmet } from "react-helmet";

import { LOGIN_USER } from "../../queries";
import Content from "../../style/Content";
import ErrorMessage from "../Error";

const initialState = {
  email: "",
  password: ""
};

class loginUser extends Component {
  constructor(props) {
    super();

    this.state = {
      ...initialState
    };
  }

  clearState() {
    this.setState({ ...initialState });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  validateForm() {
    const { email, password } = this.state;
    const isInvalid = !email || !password || password.length <= 7;
    return isInvalid;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <Mutation mutation={LOGIN_USER} variables={{ email, password }}>
          {(login, { data, loading, error }) => {
            return (
              <Content pad="none">
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    const { email, password } = this.state;
                    await login({
                      variables: { email, password }
                    });
                    this.props.refetch();
                    this.clearState();
                    this.props.history.push("dashboard");
                  }}
                >
                  <Box>
                    <Grommet theme={grommet}>
                      <Paragraph
                        textAlign="center"
                        size="xxlarge"
                        margin="xlarge"
                      >
                        Log In
                      </Paragraph>
                    </Grommet>
                    <FormField label="Email">
                      <TextInput
                        value={email}
                        onChange={this.handleChange.bind(this)}
                        type="email"
                        name="email"
                      />
                    </FormField>

                    <FormField label="Password">
                      <TextInput
                        value={password}
                        onChange={this.handleChange.bind(this)}
                        type="password"
                        name="password"
                      />
                    </FormField>

                    <Button
                      type="submit"
                      label="Log In"
                      primary
                      margin="medium"
                      disabled={loading || this.validateForm()}
                    />
                    <Button label="Sign Up" href="/signup" margin="small" />
                  </Box>
                  {error && <ErrorMessage error={error} />}
                </form>
              </Content>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default withRouter(loginUser);
