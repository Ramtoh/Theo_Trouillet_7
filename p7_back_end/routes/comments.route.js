const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { content } = req.body
    const result = await prisma.comments.create({
        data: {
            content,
        },
    })
    res.json(result)
});

module.exports = router;