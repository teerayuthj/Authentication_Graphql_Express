import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../queries";
import { Box, Button, FormField, TextInput, Grommet, Paragraph } from "grommet";
import { grommet } from "grommet/themes";
import Content from "../style/Content";
import { withRouter } from "react-router-dom";
import ErrorMessage from "./error";

class loginUser extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
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
        <Mutation mutation={LOGIN_USER} variables={{ email, password }}>
          {(login, { data, loading, error }) => {
            return (
              <Content pad="none">
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    const { email, password } = this.state;
                    await login({
                      variables: { email, password },
                      refetchQueries: { email, password }
                    });
                    this.props.history.replace("/dashboard");
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
