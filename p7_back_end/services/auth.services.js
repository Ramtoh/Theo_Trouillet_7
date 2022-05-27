const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const jwt = require('../utils/jwt');
const { fs, read } = require('fs');
const { nextTick } = require('process');
const cookieParser = require('cookie-parser');

class AuthService {
    static async register(data) {
        const { email } = data;
        data.password = await bcrypt.hashSync(data.password, 8);
        let users = await prisma.users.create({
            data
        })
        data.accessToken = await jwt.signAccessToken(users);

        return data;
    }

    static async login(data) {
        const { email, password } = data;
        const users = await prisma.users.findUnique({
            where: {
                email
            }
        });
        if (!users) {
            throw createError.NotFound('User non enregistré')
        }
        const checkPassword = bcrypt.compareSync(password, users.password)
        if(!checkPassword) throw createError.Unauthorized('E-mail ou mot de passe incorrect..')
        delete users.password
        const accessToken = await jwt.signAccessToken(users)
        return { ...users, accessToken}
    }
}

module.exports = AuthService;