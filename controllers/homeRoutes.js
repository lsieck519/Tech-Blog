const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// get all posts for the homepage 

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

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// login

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// signup

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
