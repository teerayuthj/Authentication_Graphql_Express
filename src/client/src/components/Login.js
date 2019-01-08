import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../queries";
import { Box, Button, FormField, TextInput } from "grommet";
import Content from "../style/Content";
import { withRouter } from "react-router-dom";

class loginUser extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }
  /*
  handleSubmit(event, login) {
    event.preventDefault();
    login()
      .then(async () => {
        await this.props.refetch();
        this.clearState();
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        this.setState({
          error: error.graphQLErrors.map(x => x.message)
        });
        console.error("ERR =>", error.graphQLErrors.map(x => x.message));
      });
  }
  */
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
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
                      variables: { email, password }
                    });
                    this.props.history.replace("/dashboard");
                  }}
                >
                  <Box>
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

                    <div>
                      <Button type="submit" label="Submit" primary={true} />
                    </div>
                  </Box>
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
