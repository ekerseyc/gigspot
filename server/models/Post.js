const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  description: {
    type: String,
    required: "You must leave a description",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  slug: String,
  ratingsAverage: {
    type: Number,
    required: [true, "A tour must have a duration"],
    default: 4.5,
    min: [1, "Rating must be above 0"],
    max: [5, "Rating must be below or equal 5.0"],
    set: (value) => Math.round(value * 10) / 10,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  locations: [
    {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      day: Number,
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
