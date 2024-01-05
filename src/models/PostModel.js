const mongoose = require('mongoose');

const PostModel = new mongoose.Schema({
  banner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref : 'peoples',
    required: true,
  },
  views:[
    {
      user_id: mongoose.Types.ObjectId , 
    }
  ],
  status: {
    type: String,
    enum: ['Approved', 'Pending'],
    default: 'Pending'
  }
},{
  timestamps:true,
});

const Posts = new mongoose.model('Posts', PostModel);

module.exports = Posts;
