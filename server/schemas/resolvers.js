const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Review, TipJar } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


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
      console.log('context:', context)
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    post: async () => {
      return Post.find().populate('user');
    },

    // put below inside checkout:
    
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items,
    //   mode: 'payment',
    //   success_url: `${url}/sucess?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${url}/`
    // });

    // return { session: session.id };
    
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
