const sequelize = require('../config/connection');

const seedUser = require('./user');
const seedComments = require('./comment');
const seedPost = require('./post');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();
  await seedComments();
  console.log('***DATABASE SEEDED***');
  process.exit(0);
};

seedAll();