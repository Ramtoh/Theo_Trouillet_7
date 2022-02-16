const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { liked } = req.body
    const result = await prisma.likes.create({
        data: {
            liked,
        },
    })
    res.json(result)
});

module.exports = router;