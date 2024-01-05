const router = require('express').Router();
const createError = require('http-errors');
const Posts = require('../../../models/PostModel');
const UpdatePost = async (req, res, next) => {
  try {
      const user = req.CurrentUser._id 
      const result = await Posts.findOneAndUpdate({
        _id: req.params.id
      },req.body);
      res.json(result);
 

  } catch (err) {
    console.log(err);
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = UpdatePost;
