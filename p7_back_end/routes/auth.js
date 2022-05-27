const router = require('express').Router();
const strongPassword = require('../middlewares/password-validator');
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');
const { PrismaClient, prisma } = require('@prisma/client');

router.post('/', user.register);

router.post('/login', user.login);

module.exports = router;