const { Post } = require('../models');

const postData = [
  {
    title: 'Coding is a Very Interesting Topic',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 1,
  },
  {
    title: 'Today I Learned...',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 2,
  },
  {
    title: 'Tips for Learning to Code',
    body: 'Eros donec ac odio tempor. Faucibus purus in massa tempor. Egestas erat imperdiet sed euismod nisi porta. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Euismod elementum nisi quis eleifend quam adipiscing. Egestas diam in arcu cursus euismod. Fermentum posuere urna nec tincidunt praesent semper feugiat. A erat nam at lectus urna duis convallis convallis.',
    user_id: 3,
  },
  {
    title: 'My First Tech Blog Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor. Faucibus purus in massa tempor. Egestas erat imperdiet sed euismod nisi porta. Sit amet venenatis urna cursus eget nunc.',
    user_id: 4,
  },
];

//post seed bodies from https://loremipsum.io/ 

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
