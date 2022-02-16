const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const { title, content } = req.body
    const result = await prisma.post.create({
        data: {
            title,
            content,
        },
    })
    res.json(result)
});

module.exports = router;
