const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },

  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  location: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },
  // passwordConfirm: {
  //   type: String,
  //   required: [true, "Please confirm your password"],
  //   validate: {
  //     // This only work on save!
  //     validator: function (el) {
  //       return el === this.password;
  //     },
  //     message: "Passwords are not the same.",
  //   },
  // },

  photo: String,
  role: {
    type: String,
    enum: ["user", "employer", "admin"],
    default: "user",
  },

  Active: {
    type: Boolean,
    default: true,
    select: false,
  },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
