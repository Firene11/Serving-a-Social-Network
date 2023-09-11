const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

// Start the seeding runtime timer
console.time('seeding');

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('user');
    }
  
    let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thought');
    }
  
    const users = [];
    const thoughts = getRandomThoughts(10);

  
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
  
    // loop through the saved users, for each user we need to generate a user thought and insert the thoughts
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
  });
  