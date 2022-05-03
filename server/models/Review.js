const { Schema, model } = require('mongoose');

const reveiwSchema = new Schema({
  rating: {
    type: Number,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  reviewAuthor: {
    type: String,
    required: true,
    trim: true,
  },
});

const Review = model('Review', reveiwSchema)

module.exports = Review;