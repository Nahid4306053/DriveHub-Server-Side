const createError = require('http-errors');
const { sign, verify } = require('jsonwebtoken');
const Peoples = require('../../models/PeopleModel');
const router = require('express').Router()
const dotenv = require('dotenv');
dotenv.config()
const VerifyUser = async (req, res, next) => {
  try {
              
    if (req.signedCookies[process.env.COOKIE_NAME]) {
      const token = req.signedCookies[process.env.COOKIE_NAME];
      const user = verify(token, process.env.SECRETKEY_KEY_F_JWT)
      if (user) {    
        const isExits = await Peoples.findOne({
          email: user.email
        });
        if (isExits) {
          req.CurrentUser = isExits;
          next()
        } else {
          next(createError(401, 'Aunathorized user'))
        }
      } else {
        next(createError(401, 'Aunathorized user'))
      }
    } else {
      next(createError(403, 'Forbiden Requiest'))
    }
  } catch (err) {
    console.log(err)
    next(createError(500, 'There is server Side Error'))
  }
}

// router.get('/', async (req, res, next) => {

// })

module.exports = VerifyUser
