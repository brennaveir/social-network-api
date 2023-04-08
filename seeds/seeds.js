const connection = require('../config/connection');
const { Thought, User } = require('../models');
const userData = require('./userData.json')


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts


  // Add users to the collection and await the results
  await User.collection.insertMany(userData);
  //Add thoughts to the collection and await the results


 
  // Log out the seed data to indicate what should appear in the database
  console.table(userData);
 
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
