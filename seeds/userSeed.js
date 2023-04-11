const { User } = require('../models');

const userData = [
  {
    name: 'Laura',
    email: 'laura@email.com',
    password: 'password123',
  },
  {
    name: 'Kimberly',
    email: 'kimberly@email.com',
    password: 'password123',
  },
  {
    name: 'Morgan',
    email: 'morgan@email.com',
    password: 'password123',
  },
  {
    name: 'Maggie',
    email: 'maggie@email.com',
    password: 'password123',
  },
  {
    name: 'Jacob',
    email: 'jacob@email.com',
    password: 'password123',
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
