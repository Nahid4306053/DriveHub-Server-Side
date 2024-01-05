const GetComment = require("../../controllers/v1/Comments/GetComment");
const PostComment = require("../../controllers/v1/Comments/PostComment");
const replay = require("../../controllers/v1/Comments/Replay");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const Comment = require("express").Router()

Comment.post("/" , VerifyUser , PostComment)
Comment.get("/:id" ,  GetComment)
Comment.put("/replay/:id" , VerifyUser ,  replay)

module.exports = Comment; 