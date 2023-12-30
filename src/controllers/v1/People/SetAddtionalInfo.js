const router = require('express').Router();
const createError = require('http-errors');
const Peoples = require('../../../models/PeopleModel');
const { default: mongoose } = require('mongoose');
const SetAddtionalInfo = async (req, res, next) => {
  try {
    if (req.body) {
      const result = await Peoples.findOneAndUpdate({_id: req.CurrentUser._id },{additionalInfo:req.body},{new:true});
      res.send(result);
    } else {
      next(createError(500, 'There is a server side errro'));
    }
  } catch (err) {
    console.log('this',err); 
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = SetAddtionalInfo;   
 