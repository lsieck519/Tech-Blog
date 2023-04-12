const { Post } = require('../models');

const postData = [
  {
    title: 'Post 1',
    body: 'This is a test post 1',
    user_id: 1,
  },
  {
    title: 'Post 2',
    body: 'This is post 2',
    user_id: 1,
  },
  {
    title: 'Post 3',
    body: 'This is post 3',
    user_id: 1,
  },
  {
    title: 'Post 4',
    body: 'This is post 4',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
