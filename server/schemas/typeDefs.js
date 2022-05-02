const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    role: String
    firstName: String
    lastName: String
    createdAt: Integer
    updatedAt: Integer
    enabled: Boolean
    ReviewId: ID
    PostId: ID
  }

  type Profile {
    user: [_id!, role]
    availability: Boolean
    contactInfo: String
    porfolioURL: String
    description: String
    review: [Review]
    pricing: Integer
    travelRange: Integer
  }

  type Review {
    user: [_id!]
    rating: Boolean
    description: String
    createdAt: Integer
    updatedAt: Integer
    enabled: Boolean
  }

  type HiringPost {
    postId: ID
    user: [_id!]
    title: String
    description: String
    eventDate: Integer
    createdAt: Integer
    updatedAt: Integer
    enabled: Boolean
    contactForm: String
    }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
