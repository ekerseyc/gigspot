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
    post: async (_, args, context) => {
      console.log("context.user", context.user);
      return Post.find().populate('user');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    editUser: async (_, args) => {
      console.log(args)
      return User.findOneAndUpdate(
        { _id: args.userId },
        { $set: { email: args.email, username: args.username, location: args.location, description: args.description } },
        { new: true, runValidators: true }
      )
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
    createPost: async (_, { description, category }, context) => {
      if (context.user) {
        const post = await Post.create({ description, category, user: context.user._id });
        console.log('postid', post._id)
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } },
          { new: true, runValidators: true }
        );
      }
    },
    removePost: async (_, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    editPost: async (_, args, context) => {
      console.log(args)
      return Post.findOneAndUpdate(
        { _id: args.postId },
        { $set: { description: args.description, category: args.category } },
        { new: true, runValidators: true }
      );
    },
  },
};

module.exports = resolvers;
