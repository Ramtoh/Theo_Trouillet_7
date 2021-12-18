const router = require('express').Router();
const strongPassword = require('../middlewares/password-validator');
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');

router.post('/', strongPassword, user.register);

router.post('/login', user.login);

router.get('/', auth, user.all);

module.exports = router;