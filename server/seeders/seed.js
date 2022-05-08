const db = require('../config/connection');
const { User, Post } = require('../models');

db.once('open', async () => {
  try {
    await Post.deleteMany({});

    console.log("post successful")
    await User.deleteMany({});
    const user = await User.create(
      {
        username: "Cristopher Eaton",
        email: "cris@email.com",
        password: "password",
        location: "Charlotte",
        description: "user",
      },
      {
        username: "Angelina Kidd",
        email: "angelina@email.com",
        password: "password",
        location: "Matthews",
        description: "user",
      },
      {
        username: "Mariyah Lucero",
        email: "mariyah@email.com",
        password: "password",
        location: "Mint Hill",
        description: "user",
      },
      {
        username: "Dallas Solis",
        email: "dallash@email.com",
        password: "password",
        location: "Asheville",
        description: "user",
      },
    );

    const postData = [
      {
        username: "Cristopher Eaton",
        author: "Cristopher Eaton",
        description: "Looking for a drummer to play in my band.",
        category: "Music",

      },
      {
        author: "Angelina Kidd",
        description: "Need someone to illustrate the cover of my book.",
        category: "Artist",
      },
      {
        author: "Mariyah Lucero",
        description: "Photographer for wedding.",
        category: "Photographer",
      },
      {
        author: "Dallas Solis",
        description: "Photographer for wedding.",
        category: "Photographer",
      }
    ];
    // const items = await Post.insertMany(postData);
    // console.log(items)
    // const person = await User.findOneAndUpdate(
    //   { username: user.username },
    //   { $addToSet: { posts: items.map(item => item._id) } }
    // )

    for (let i = 0; i < postData.length; i++) {
      const { _id, author } = await Post.create(postData[i]);
      console.log(_id);
      const person = await User.findOneAndUpdate(
        { username: author },
        { $addToSet: { posts: _id } }
      );

      console.log('person', person)
    }
  } catch (err) {
    console.error(err);
    process?.exit(1);
  }
  process?.exit(0);
});
