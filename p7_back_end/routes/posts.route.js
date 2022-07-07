const router = require('express').Router();
const auth = require('../middlewares/auth');
const post = require('../controllers/post.controller');

router.post('/', auth, post.post);
router.get('/', auth, post.get);
router.delete('/:id', auth, post.delete);
router.put('/:postId', auth, post.modify);

module.exports = router;

