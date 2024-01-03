
const CreatePeople = require("../../controllers/v1/People/CreatePeople")
const SetAddtionalInfo = require("../../controllers/v1/People/SetAddtionalInfo")
const CreateAccessToken = require("../../middlewares/Auth/CreateAccessToken")
const VerifyUser = require("../../middlewares/Auth/Verifyuser")
const getPeople= require("../../controllers/v1/People/getPeoples")
const ChangeRole= require("../../controllers/v1/People/ChangeRole")
const User = require("express").Router()

User.post('/',CreatePeople , CreateAccessToken);
User.patch('/set-addtional-info',VerifyUser , SetAddtionalInfo);
User.get('/all', VerifyUser , getPeople);
User.patch('/role/:id',VerifyUser , ChangeRole);

module.exports = User     