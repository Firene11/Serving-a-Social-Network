const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { someUsers, someThoughts } = require('./data');
const mongoose = require('mongoose');

connection.on('error', (err) => err);

const generateUserData = async (userData, thoughtData) => {
  const thoughtId = new mongoose.Types.ObjectId();
  console.log(thoughtId);
  await Thought.collection.insertOne(
    {
      _id: thoughtId,
      thoughtText: thoughtData.thoughtText,
      username: thoughtData.username,
    }
    );
  await User.collection.insertOne(
    {
      username: userData.username,
      email: userData.email,
      thoughts: [thoughtId]
    }
  )
}

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }
  
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }
  
    // const users = getRandomUser;
    // const thoughts = getRandomThought;

  
    // const thoughts = await Thought.collection.insertMany(someThoughts);
    // const users = await User.collection.insertMany(someUsers);

    for (let index = 0; index < someUsers.length; index++) {
      await generateUserData(someUsers[index], someThoughts[index]);
    }
  
    // loop through the saved users, for each user we need to generate a user thought and insert the thoughts
    // console.log(users);
    // console.log(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
  });
  