const { Post } = require('../models');

const postData = [
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
  {
    title: '',
    body: '',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
