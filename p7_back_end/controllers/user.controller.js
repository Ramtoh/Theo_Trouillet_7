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
            const retourDB = await user.me(req, res, next);
            res.status(200).json({
                status: true, 
                message: 'Cet utilisateur',
                retourDB
            })
        } catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}



module.exports = userController;