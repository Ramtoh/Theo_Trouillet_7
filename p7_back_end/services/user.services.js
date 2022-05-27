const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const createError = require('http-errors');
const jwt = require('../utils/jwt');

class userService {
    static async all() {
        const allUsers = await prisma.users.findMany();
        return allUsers;
    }

    static async me(req, res) {
        const userId = req.userId;
        const users = await prisma.users.findUnique({
            where: {
                user_id: userId
            }
        });
        return res.json({ id: users.user_id, role: users.isAdmin, firstName: users.firstName, lastName: users.lastName });
    }
}

module.exports = userService;