const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ['body', 'date_created'],
        },
        {
          model: User,
          attributes: ['email'],
          order: ['created_at' , 'desc']
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
  
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      user: req.session.user
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;
