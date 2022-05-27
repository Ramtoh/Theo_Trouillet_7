const auth = require('../services/auth.services');
const createError = require('http-errors');
const { prisma } = require('@prisma/client');
const accessToken = require('../utils/jwt');
const { signAccessToken } = require('../utils/jwt');

class authController {
    static register = async (req, res, next) => {
        try {
            const users = await auth.register(req.body);
            res.status(200).json({
                status: true,
                message: 'Utilisateur créé!',
                retourDB: users
            })
        }
        catch(e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static login = async (req, res, next) => { 
        try {
            const retourDB = await auth.login(req.body)
            const token = retourDB.accessToken;
            res.status(200).json({
                status: true,
                message: 'Compte connecté avec succès',
                retourDB
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}

module.exports = authController;