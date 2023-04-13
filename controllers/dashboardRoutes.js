const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts that belong to the user that is signed in
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      attributes: ['title', 'body', 'id', 'date_created'],
      include: [
        {
          model: Comment,
          attributes: ['body', 'post_id', 'user_id', 'date_created'],
          include: { model: User, attributes: ['email'] },
        },
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json('Unable to create new post');
  }
});

// update a post -- to-do
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json('Unable to update post');
  }
});


// delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
