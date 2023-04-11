const { Comment } = require('../models');

const commentData = [
  {
    body: '',
    post_id: 1,
    user_id: 1,
  },
  {
    body: '',
    post_id: 1,
    user_id: 1,
  },
  {
    body: '',
    post_id: 1,
    user_id: 1,
  },
  {
    body: '',
    post_id: 1,
    user_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
