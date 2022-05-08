const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    location: String
    description: String
    role: String
    posts: [Post]
    reviews: [Review]
  }

  type Post {
    _id: ID
    author: String
    description: String
    category: String
    user: User
  }

  type Review {
    _id: ID
    rating: Int
    description: String
    reviewAuthor: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID): User
    me: User
    post: [Post]
  }

  type Mutation {
    addUser(
      email: String!
      username: String!
      password: String!
      location: String
      description: String
    ): Auth
    editUser(userId: ID, email: String, username: String, location: String, description: String): Auth
    login(email: String!, password: String!): Auth
    createPost(description: String!, category: String!): Post
    editPost(postId: ID!, description: String!, category: String!): Post

    removePost(postId: ID!): Post
    applyGig(description: String!): Post

  }
`;

module.exports = typeDefs;
