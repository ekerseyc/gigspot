import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    # $location: String
    # $description: String
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      #location: $location
      #description: $description
    ) {
      token
      user {
        _id
        username
        #location
        #description
      }
    }
  }
`;

export const CREATE_POST = gql`
 mutation CreatePost($description: String!, $category: String!) {
  createPost(description: $description, category: $category) {
    _id
    description
    category
  }
}
`;

export const APPLY_GIG = gql`
  mutation ApplyGig($description: String!) {
    applyGig(description: $description) {
      _id
      description
      }
  }
`;
