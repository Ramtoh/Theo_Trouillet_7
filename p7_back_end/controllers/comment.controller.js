const { PrismaClient } = require('@prisma/client');
const { read } = require('fs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const createError = require('http-errors');
const commentService = require('../services/comment.services');

class commentController {
    static comment = async(req, res, next) => {
        try {
            const comment = await commentService.createComment(req, res, next);
            res.status(200).json({
                status: true,
                message: 'Commentaire créé',
                comment
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static getAllFromOne = async(req, res, next) => {
        try {
            const getAll = await commentService.getCommentsFromPost(req, res, next);
            res.status(200).json({
                status: true,
                message: 'Tous les commentaires de cette publication',
                getAll
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}

module.exports = commentController;