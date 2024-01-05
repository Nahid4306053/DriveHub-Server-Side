const { Schema, default: mongoose, model } = require("mongoose");


const commentModel = new Schema({
    commenter:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'peoples'              
    },    
    post_id:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'posts'              
    },
    comment:{
     type: String, 
     required: true,            
    },
    replays:[
      {
        replayer:{
          type: mongoose.Types.ObjectId,
          ref: 'peoples' 
        },
        replay:{
          type : String
        },
        date:{
          type : Date,
          default : Date.now
        }
      }
    ]               
},
{
  timestamps: true
})

const reviews = new model('comments',commentModel)

module.exports = reviews;