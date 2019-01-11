import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter, NavLink } from "react-router-dom";
import { Box, Button, FormField, TextInput, Grommet, Paragraph } from "grommet";
import { grommet } from "grommet/themes";

import Content from "../../style/Content";
import { SIGNUP_USER } from "../../queries";
import ErrorMessage from "../Error";

class Signup extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      passwordMatch: null
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
    const { password, passwordConfirm } = this.state;
    const isMatch = password !== passwordConfirm && password.length <= 7;
    this.setState({
      passwordMatch: isMatch
    });
  }

  validateForm() {
    const { email, password, passwordConfirm } = this.state;
    const isInvaild =
      !email ||
      !password ||
      password !== passwordConfirm ||
      password.length <= 7;
    return isInvaild;
  }

  render() {
    const { email, password, passwordConfirm } = this.state;

    return (
      <div>
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
                      refetchqueries: { email, password }
                    });
                    this.props.history.replace("/login");
                  }}
                >
                  <Box>
                    <Grommet theme={grommet}>
                      <Paragraph
                        textAlign="center"
                        size="xxlarge"
                        margin="large"
                      >
                        Sign Up
                      </Paragraph>
                    </Grommet>
                    <FormField label="Email">
                      <TextInput
                        value={email}
                        onChange={this.handleChange.bind(this)}
                        type="email"
                        name="email"
                        size="large"
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
                    <FormField label="Password Confirm">
                      <TextInput
                        type="password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.handleChange.bind(this)}
                        onBlur={this.handlePasswordConFirm.bind(this)}
                      />
                    </FormField>

                    <div>
                      <p>
                        Already have an account?
                        <NavLink to="/login"> Log In</NavLink>
                      </p>
                    </div>
                    <Button
                      type="submit"
                      label="Sign Up"
                      margin="medium"
                      primary
                      disabled={loading || this.validateForm()}
                    />
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

export default withRouter(Signup);
