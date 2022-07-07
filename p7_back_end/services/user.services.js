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
        return users
    }

    static async delete(req, res) {
        const users = await prisma.users.findMany({})
        const userId = req.userId;
        const deleteUser = async (user) => {
            return await prisma.users.delete({
                where: {
                    user_id: userId
                }
            })
        }
        const deleteUsers = async () => {
            return Promise.all(users.map((user) => deleteUser(user)))
        } 
        deleteUsers()
    }
}

module.exports = userService;