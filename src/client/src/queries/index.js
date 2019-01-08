import gql from "graphql-tag";

export const CURRENT_USER = gql`
  {
    user {
      id
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
