const router = require('express').Router();
const auth = require('../middlewares/auth');
const user = require('../controllers/user.controller');

router.get('/', auth, user.all);

router.get('/me', auth, user.me);

module.exports = router;