const { PrismaClient } = require('@prisma/client');
const { read } = require('fs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const createError = require('http-errors');
const postService = require('../services/post.services');


class postController {
    static post = async(req, res, next) => {
        try {
            const post = await postService.post(req);
            res.status(200).json({
                status: true,
                message: 'Post créé',
                post
            })
        } catch(e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static get = async(req, res, next) => {
        try {
            const posts = await postService.get();
            res.status(200).json({
                status: true,
                message: 'Tous les posts',
                posts,
            })
        } catch(e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static delete = async(req, res, next) => {
        try {
            const deleteAPost = await postService.delete(req, res, next);
            res.status(200).json({
                status: true,
                message: 'Message supprimé!',
                deleteAPost
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static modify = async(req, res, next) => {
        try{
            const postToUpdate = await postService.modify(req, res, next);
            res.status(200).json({
                status: true,
                message: 'Message modifié',
                postToUpdate
            })
        } catch(e) {
            next(creatErorr(e.statusCode, e.message))
        }
    }
}

module.exports = postController;
