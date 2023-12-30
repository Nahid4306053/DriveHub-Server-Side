const { Schema, default: mongoose, model } = require("mongoose");


const StoryModel = new Schema({
  user : {
   type : mongoose.Types.ObjectId,
    ref : "peoples",
    required: true,
  },
  name: {
       type: String,
       required: true
  },  
  description: {
       type: String,
       required: true
  },
  date :{
     type : String,
     required : true
  },
  status :{
     type : String,
     enum:["to-do","ongoing","completed"],
     default : "to-do"
  }
},{
    timestamps:true
})

const storys = new model('tasks',StoryModel)

module.exports = storys;