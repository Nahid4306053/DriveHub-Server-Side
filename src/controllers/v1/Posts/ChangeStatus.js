const router = require('express').Router();
const createError = require('http-errors');
const Posts = require('../../../models/PostModel');
const { default: mongoose } = require('mongoose');
const ChangeStatus = async (req, res, next) => { 
  try {
    if (req.params.id) {
      const result = await Posts.findOneAndUpdate({_id: req.params.id },{status:"Approved"},{new:true});
      res.send(result);
    } else {
      next(createError(500, 'There is a server side error'));
    }
  } catch (err) {
    console.log('=this',err); 
    next(createError(500, 'There is a server side error'));
  }
}

module.exports = ChangeStatus;   
