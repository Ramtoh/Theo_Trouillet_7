const router = require('express').Router();
const strongPassword = require('../middlewares/password-validator');
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');
const authorizationCookie = require('../middlewares/cookie-parser');
const multer = require('../middlewares/multer');
const { PrismaClient, prisma } = require('@prisma/client');

router.post('/', strongPassword, user.register);

router.post('/login', user.login);

router.get('/', auth, user.all);

router.get('/me', authorizationCookie, (req, res) => {
    return res.json({ user: {userId: req.userId, isAdmin: req.userIsAdmin }});
})


module.exports = router;