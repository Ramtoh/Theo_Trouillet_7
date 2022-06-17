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
                isAdmin: user.isAdmin,
                firstName: user.firstName,
                lastName: user.lastName
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
        console.log(token);
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, (err) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message 
                    return reject(createError.Unauthorized(message))
                }
            })
        })
    },
}

