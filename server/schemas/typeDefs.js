const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }


  type Post {
    _id: ID 
    author: String 
    description: String 
  }

  type Review {
    _id: ID 
    rating: Int 
    description: String 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    post: [Post]
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addPost(author:String!, description:String!): Post
  }
`;

module.exports = typeDefs;
