const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const auth = (req, res, next) => { 
try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
        throw 'ID Utilisateur non valable!';
    } else {
        next();
    }
} catch (error) {
    res.status(401).json({ error: error | 'Requete non authentifiée'});
}
}

module.exports = auth;