import React, { Component } from "react";
import { Mutaion } from "react-apollo";
import { withRouter } from "react-router-dom";
import { SIGNUP_USER } from "../queries";
import Content from "../style/Content";
import { Box, Button, FormField, TextInput, Grommet, Paragraph } from "grommet";
import { grommet } from "grommet/themes";

class Signup extends Component {
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
      <div>
        <Mutaion
          mutaion={SIGNUP_USER}
          variables={{ email, password, passwordConfrim }}
        >
          {(signup, { data, loading, error }) => {
            return (
              <Content pad="none">
                <form>
                  <Box>
                    <Grommet theme={grommet}>
                      <Paragraph
                        textAlign="center"
                        size="xxlarge"
                        margin="xlarge"
                      >
                        Signup
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
                    <FormField label="Password Confirm">
                      <TextInput
                        value={passwordConfrim}
                        name="passwordConfirm"
                        type="password"
                        onChange={this.handleChange.bind(this)}
                        onBlur={this.handlePasswordConFirm.bind(this)}
                      />
                    </FormField>

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
        </Mutaion>
      </div>
    );
  }
}

export default withRouter(Signup);
