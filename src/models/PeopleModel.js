const { Schema, model } = require("mongoose");


const PeopleModel = new Schema({
     uid:{
        type:String,
        required:true,
        unique: true
     },    
     displayName:{
        type:String,
        required:true
     },    
     email:{
       
        type:String,
        required:true,
        unique: true
     },    
     photoURL:{
        type:String,
        required:true
     }, 
     role:{
      type:String,
      enum:['user','admin'],
      default:"user"
     }, 
     additionalInfo :{
        type:Object ,
        default : null           
     }            
},{
     timestamps:true
})

const Peoples = new model('peoples',PeopleModel)

module.exports = Peoples; 