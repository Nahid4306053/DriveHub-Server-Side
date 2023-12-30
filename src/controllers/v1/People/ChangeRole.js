const router = require('express').Router();
const createError = require('http-errors');
const Peoples = require('../../../models/PeopleModel');
const { default: mongoose } = require('mongoose');
const ChangeRole = async (req, res, next) => {
  try {
    if (req.params.id) {
      const result = await Peoples.findOneAndUpdate({_id: req.params.id },{role:req.body.role},{new:true});
      res.send(result);
    } else {
      next(createError(500, 'There is a server side errro'));
    }
  } catch (err) {
    console.log('=this',err); 
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = ChangeRole;   
