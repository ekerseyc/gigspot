const {Schema, model} = require('mongoose');

const reviewSchema = new Schema({
    rating: {
        type: Number,
        minLength: 1,
        maxLength: 5,
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    tour: {
        type: Schema.ObjectId,
        ref: "Post",
        required: [true, "Review must belong to a post."],
    },
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: [true, "Review must belong to a user."],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
});


const Review = model('Review', reveiwSchema)

module.exports = Review;