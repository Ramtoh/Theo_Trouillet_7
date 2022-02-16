const auth = require('../services/auth.services');
const createError = require('http-errors');
const { prisma } = require('@prisma/client');

class authController {
    static register = async (req, res, next) => {
        try {
            const users = await auth.register(req.body);
            res.status(200).json({
                status: true,
                message: 'Utilisateur créé!',
                data: users
            })
        }
        catch(e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static login = async (req, res, next) => { 
        try {
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: 'Compte connecté avec succès',
                data
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static all = async (req, res, next) => {
        try {
            const users = await auth.all();
            res.status(200).json({
                status: true,
                message: 'Tous les utilisateurs',
                data: users
            })
        } catch(e) {
            next(createError(e.statusCode, e.message))
        }
    }
}

module.exports = authController;