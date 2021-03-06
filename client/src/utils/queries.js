import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      location
      description
    }
  }
`;

export const QUERY_USER = gql`
  query user($userId: ID) {
    user(userId: $userId) {
      _id
      username
      email
      location
      description
      posts {
        _id
        description
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      location
      description
      posts {
        _id
        description
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query post {
    post {
      _id
      author
      description
      category
      user {
        _id
        username
      }
    }
  }
`;
