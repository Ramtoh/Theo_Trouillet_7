const router = require('express').Router();
const auth = require('../middlewares/auth');
const comment = require('../controllers/comment.controller');

router.post('/:postId', auth, comment.comment);

router.get('/:publicationId', auth, comment.getAllFromOne);

module.exports = router;