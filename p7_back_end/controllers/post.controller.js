const { PrismaClient } = require('@prisma/client');
const { read } = require('fs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const createError = require('http-errors');


class postController {
    static post = async (req, res, next) => {
        try {
            const { title, content } = req.body;
            const post = await prisma.post.create({
                data: {
                    title,
                    content,
                    users: {
                        connect: { 
                            user_id: req.userId
                        }
                    }
                },
            })
            res.status(200).json({
                status: true, 
                message: 'Post créé',
                post
            })
        }
        catch(e) {
            next(createError(e.statusCode, e.message))
        }
    };
    
    static get = async (req, res, next) => {
        try {
            const posts = await prisma.post.findMany();
            res.status(200).json({posts})
        }
    
        catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
    
    // router.put('/:id', async (req, res) => {
    //     try {
    //         const post = await prisma.post.findUnique(req.params.id);
    //         if (post.user_id === req.body.user_id) {
    //             await prisma.post.update({ $set: req.body })
    //             res.status(200).json({ message: 'Le post a été modifié' });
    //         } else {
    //             res.status(400).json({ message: 'Tu ne peux pas modifier ce post' })
    //         }
    //     }
    //     catch (err) {
    //         res.status(500).json({ err: 'Erreur' })
    //     }
    // });
    
    // router.delete('/', async (req, res) => {
    //     try {
    //         const deletePosts = prisma.post.deleteMany();
    //         res.json(deletePosts)
    //     }
    
    //     catch (e) {
    //         next(createError(e.statusCode, e.message))
    //     }
    // })
}

module.exports = postController;
