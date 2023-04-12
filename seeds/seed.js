const sequelize = require('../config/connection');

const seedUser = require('./userSeed');
const seedPost = require('./postSeed');
const seedComment = require('./commentSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedDatabase();
