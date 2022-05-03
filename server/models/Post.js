const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  description: {
    type: String,
    required: 'You must leave a description',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = model('Post', postSchema);

module.exports = Post;