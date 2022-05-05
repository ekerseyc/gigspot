const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    role: String!
    posts: [Post]
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
    reviewAuthor: String
  }
  
  // type  Checkout {
  //   session: ID
  // }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
    post(postId: ID!): [Post]
    // checkout here
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    createPost(author:String!, description:String!): Post
    removePost(postId:ID!): Post
  }
`;

module.exports = typeDefs;
