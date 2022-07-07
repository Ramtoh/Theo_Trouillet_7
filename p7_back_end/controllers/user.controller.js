const user = require('../services/user.services.js');
const createError = require('http-errors');

class userController {
    static all = async (req, res, next) => {
        try {
            const users = await user.all();
            res.status(200).json({
                status: true,
                message: 'Tous les utilisateurs',
                retourDB: users
            })
        } catch(e) {
            next(createError(e.statusCode, e.message))
        }
    }
    
    static me = async (req, res, next) => { 
        try {
            const users = await user.me(req, res, next);
            res.status(200).json({
                status: true, 
                message: 'Cet utilisateur',
                users
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }

    static delete = async (req, res, next) => {
        try {
            const users = await user.delete(req, res, next);
            res.status(200).json({
                status: true,
                message: 'Utilisateur supprimé',
                users
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}

module.exports = userController;