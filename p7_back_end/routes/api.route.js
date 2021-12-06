const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

router.get('/users', async (req, res, next) => {
    try {
        const users = await prisma.users.findMany({})
        res.json(users)
    } catch {
        next(error)
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const createUser = await prisma.users.create({
            data: req.body,
        })
        res.json(createUser)
    } catch (error) {
        next(error)
    }
});

module.exports = router;