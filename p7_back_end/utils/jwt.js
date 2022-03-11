const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { prisma } = require('@prisma/client')
require('dotenv').config()
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
module.exports = {
    signAccessToken(user) {
        return new Promise((resolve, reject) => { 
            jwt.sign({ 
                userId: user.user_id,
                isAdmin: user.isAdmin
            }, 
             accessTokenSecret, 
            { 
                expiresIn: "24h",
            }, 
            (err, token) => {
                if(err) {
                    reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, (err) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message 
                    return reject(createError.Unauthorized(message))
                }
            })
        })
    },
    checkUserId(data) {
        if (data > 1) {
            let token = data.split(' ')[1];
            try {
                let decodedToken = jwt.verify(token, accessTokenSecret);
                userId = decodedToken.userId;
                return userId;
            } catch (err) {
                return err;
            }
        }
    },    
}

