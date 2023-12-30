const Peoples = require('../../../models/PeopleModel');
const createError = require('http-errors');


const CreatePeople = async (req, res, next) => {
  try {
    let CurrentUser;
    if (req.body.email) {  
      const isuserExits = await Peoples.findOne({
        email: req.body.email
      })
    
      if (isuserExits) {
        const result = await Peoples.findOneAndUpdate({
          email: req.body.email
        }, req.body,{ new: true })
        CurrentUser = result;

      } else {  
        const result = await Peoples(req.body).save()
        CurrentUser = result;
      }    
      req.CurrentUser = CurrentUser;
      next()
    } else {
      next(createError(500, "There is Server side Error"))
    }
   
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = CreatePeople;
