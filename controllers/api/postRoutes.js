const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ['body', 'post_id', 'date_created', 'user_id'],
          include: { model: User, attributes: ['email'] },
        },
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a specific post
router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ['title', 'body', 'date_created'],
      include: [
        {
          model: Comment,
          attributes: ['body', 'post_id', 'user_id', 'date_created'],
          include: {
            model: User,
            attributes: ['email'],
          },
        },
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });
    const post = postData.get({ plain: true });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
