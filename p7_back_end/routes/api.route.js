const router = require('express').Router();
const auth = require('./auth');
const user = require('./user.routes');
const createError = require('http-errors');
const post = require('./posts.route');
const comments = require('./comments.route');

router.get('/', (req, res) => {
    res.send('hello world');
});

router.use('/auth', auth);
router.use('/user', user);
router.use('/main', post);
router.use('/main/comments', comments);

module.exports = router;