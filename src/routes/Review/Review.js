const getSingelRiview = require("../../controllers/v1/Review/GetSingelRiviews");
const PostReview = require("../../controllers/v1/Review/PostReview");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const review = require("express").Router()

review.post("/" , VerifyUser , PostReview)
review.get("/singel/:id" , getSingelRiview)

module.exports = review; 