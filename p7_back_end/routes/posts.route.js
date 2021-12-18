const router = require("express").Router();
const posts = require("../controllers/posts.controller");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer.js");

