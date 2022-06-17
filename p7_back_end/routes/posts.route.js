const router = require('express').Router();
const auth = require('../middlewares/auth');
const post = require('../controllers/post.controller');

router.post('/', auth, post.post);
router.get('/', auth, post.get);

module.exports = router;

