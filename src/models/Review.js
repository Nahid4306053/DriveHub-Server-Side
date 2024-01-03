const { Schema, default: mongoose, model } = require("mongoose");


const reviewModel = new Schema({
    reviewer:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'peoples'              
    },    
    carData:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'cars'              
    },
    rating:{
     type: Number,
     required: true,            
    } 
    ,
    review:{
     type: String,
     required: true,            
    }                
},
{
  timestamps: true
})

const reviews = new model('reviews',reviewModel)

module.exports = reviews;