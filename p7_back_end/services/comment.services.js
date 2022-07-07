const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const jwt = require('../utils/jwt');

class commentService {
    static async createComment(req, res) {
        const { content, publicationId } = req.body;

        const comment = await prisma.comments.create({
            data: {
                content,
                users: {
                    connect: {
                        user_id: req.userId
                    }
                },
                post: {
                    connect: {
                        post_id: publicationId
                    }
                }
            }
        })

        return comment
    }

    static async getCommentsFromPost(req, res) { 
        const getAll = await prisma.comments.findMany({
            where: {
                publication_id: parseInt(req.params.publicationId, 10)
            }
        })

        return getAll
    }
}

module.exports = commentService;