const router = require('express').Router();
const auth = require('./auth');
const createError = require('http-errors');
const post = require('./posts.route');
const comments = require('./comments.route');
const likes = require('./likes.route');
const multer = require('../middlewares/multer-config');

router.get('/', (req, res) => {
    res.send('hello world');
});

router.use('/auth', auth);
router.use('/main', post);
router.use('/main/comments', comments);
router.use('/main/likes', likes);

router.use( async (req, res, next) => {
    next(createError.NotFound('Route not found'))
})
router.use( (err, req, res, next) => {
    res.status(err.status || 500).json({
        status: false,
        message: err.message
    })
})
module.exports = router;