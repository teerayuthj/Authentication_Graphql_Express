import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Mutation } from "react-apollo";
import { SIGNUP_USER } from "../queries";
import Content from "../style/Content";
import { Box, Button, FormField, TextInput, Grommet, Paragraph } from "grommet";
import { grommet } from "grommet/themes";

class Register extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      passwordConfrim: ""
    };
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handlePasswordConFirm() {
    const { password, passwordConfrim } = this.state;
    const isMatch = password !== passwordConfrim && password.length <= 8;
    this.setState({
      passwordMatch: isMatch
    });
  }

  validateForm() {
    const { email, password, passwordConfrim } = this.state;
    const isInvaild =
      !email ||
      !password ||
      password !== passwordConfrim ||
      password.length <= 8;
    return isInvaild;
  }
  render() {
    const { email, password, passwordConfrim } = this.state;
    return (
      <Mutation mutation={SIGNUP_USER} variables={{ email, password }}>
        {(signup, { data, loading, error }) => {
          return (
            <Content pad="none">
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  const { email, password } = this.state;
                  await signup({
                    variables: { email, password },
                    refetchQueries: { email, password }
                  });
                  this.props.history.replace("/dashboard");
                }}
              >
                <Box>
                  <Grommet theme={grommet}>
                    <Paragraph textAlign="center" size="xxlarge" margin="large">
                      Signup
                    </Paragraph>
                  </Grommet>
                  <FormField label="Email">
                    <TextInput
                      value={email}
                      type="email"
                      name="email"
                      onChange={this.handleChange.bind(this)}
                    />
                  </FormField>
                  <FormField label="Password">
                    <TextInput
                      value={password}
                      type="password"
                      name="password"
                      onChange={this.handleChange.bind(this)}
                    />
                  </FormField>
                  <FormField label="Password Confirm">
                    <TextInput
                      value={passwordConfrim}
                      name="passwordConfirm"
                      type="password"
                      onChange={this.handleChange.bind(this)}
                      onBlur={this.handlePasswordConFirm.bind(this)}
                    />
                  </FormField>
                  <div>
                    <p>
                      Already have an account?{" "}
                      <NavLink to="/login">Login</NavLink>
                    </p>
                  </div>

                  <Button
                    type="submit"
                    label="Register"
                    margin="medium"
                    primary
                    disabled={loading || this.validateForm()}
                  />
                </Box>
              </form>
            </Content>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(Register);
