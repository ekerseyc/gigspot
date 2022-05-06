const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Review, TipJar } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User
        .find()
        .populate('posts')
        .populate('reviews');
    },
    user: async (_, { userId }) => {
      return User.findOne({ _id: userId }).populate('posts');
    },
    me: async (_, args, context) => {
      if (context.user) {
        console.log(context.user);
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    post: async () => {
      return Post.find().populate('user');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createPost: async (_, args) => {
      const post = await Post.create(args);
      return post;
    },
    removePost: async (_, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
  },
};

module.exports = resolvers;
