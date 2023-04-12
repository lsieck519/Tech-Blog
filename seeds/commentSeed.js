const { Comment } = require('../models');

const commentData = [
  {
    body: 'this is a great post #1',
    post_id: 1,
    user_id: 1,
  },
  {
    body: 'nice post #1',
    post_id: 2,
    user_id: 1,
  },
  {
    body: 'post #3 is awesome',
    post_id: 3,
    user_id: 1,
  },
  {
    body: 'post #4 way to go',
    post_id: 1,
    user_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
