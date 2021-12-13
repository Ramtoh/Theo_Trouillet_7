const router = require('express').Router();
const auth = require('./auth');
const createError = require('http-errors');

router.get('/', (req, res) => {
    res.send('hello world');
});

router.use('/auth', auth);

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