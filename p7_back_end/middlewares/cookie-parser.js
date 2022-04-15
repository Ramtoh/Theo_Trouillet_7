const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


const authorizationCookie = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(req.cookies);
    if (!token) {
      return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = data.userId;
        req.userIsAdmin = data.isAdmin;
        req.userFirstName = data.firstName;
        req.userLastName = data.lastName;
        console.log(data);
        return next();
    } catch (err) {
       console.log(err); 
       return res.sendStatus(403);
    }
};

module.exports = authorizationCookie;