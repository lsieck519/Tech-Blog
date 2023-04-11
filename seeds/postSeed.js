const { Post } = require('../models');

const postData = [
  {
    title: 'Post 1',
    body: 'This is a test post 1',
    user_id: 1,
  },
  {
    title: '',
    body: '',
    user_id: 1,
  },
  {
    title: '',
    body: '',
    user_id: 1,
  },
  {
    title: '',
    body: '',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
