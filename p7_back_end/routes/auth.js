const router = require('express').Router();
// const strongPassword = require('../middlewares/password-validator');
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');
const authorizationCookie = require('../middlewares/cookie-parser');
const multer = require('../middlewares/multer-config');
const { PrismaClient, prisma } = require('@prisma/client');

router.post('/', user.register);

router.post('/login', user.login);

router.get('/', auth, user.all);

router.get('/me', auth, user.me);


module.exports = router;