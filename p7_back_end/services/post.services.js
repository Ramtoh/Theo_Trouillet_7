const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const jwt = require('../utils/jwt');

class postService {
    static async post(req) {
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
        return post
    };
    
    static async get() {
        const posts = await prisma.post.findMany();
        return posts
    }
    
    static async delete(req) {
        const { id } = req.params; 
        const deletedPost = await prisma.post.delete({
            where: {
                post_id: Number(id),
            }
        })
        return deletedPost
    }

    static async modify(req) {
        const { title, content } = req.body;
        const { postId } = req.params;
        
        const postToUpdate = await prisma.post.update({
            where: {
                post_id: postId
            },
            data: {
                title: title,
                content: content,
                author_id: req.userId
            }
        })
        return postToUpdate
    }
}

module.exports = postService;