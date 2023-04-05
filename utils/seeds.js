const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing users
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random users objects using a helper function that we imported from ./data

    const username = getRandomName()
    const email = `${username}@gmail.com`;

    users.push({
      username,
      email
    });
  }

  const thoughts = [];

  // Loop 20 times -- add thoughts to the thought array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughtText = getRandomThoughts(20);

    const username = getRandomName()
    const reactions = getRandomReactions(5)

    thoughts.push({
      thoughtText,
      username,
      reactions
    });
  }
  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  //Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts)

 
  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts)
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
