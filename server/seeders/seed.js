const db = require('../config/connection');
const { User, Post } = require('../models');

db.once('open', async () => {
  try {
    await Post.deleteMany({});

    console.log("post successful")
    await User.deleteMany({});
    const user = await User.create({
      username: "testuser",
      email: "test@user.com",
      password: "password1234",
      location: "Charlotte",
      description: "user",
    });

    const postData = [
      {
        author: "Jimi",
        description: "Looking for a drummer to play in my band.",
        category: "Music",
        user: user._id
      },
      {
        author: "Mary",
        description: "Need someone to illustrate the cover of my book.",
        category: "Artist",
        user: user._id
      },
      {
        author: "Slash",
        description: "Photographer for wedding.",
        category: "Photographer",
        user: user._id
      }
    ];


    const items = await Post.insertMany(postData);
    const person = await User.findOneAndUpdate(
      { _id: user._id },
      { $addToSet: { posts: items.map(item => item._id) } }
    )


  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
