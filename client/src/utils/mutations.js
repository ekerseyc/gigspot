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
 mutation createPost($description: String!, $category: String!) {
  createPost(description: $description, category: $category) {
    _id
    description
    category
    user {
      username
    }
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
