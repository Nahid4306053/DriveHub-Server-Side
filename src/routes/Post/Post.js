const AddPost = require('../../controllers/v1/Posts/AddPost');
const MyPosts = require('../../controllers/v1/Posts/MyPosts');
const getPosts = require('../../controllers/v1/Posts/getPosts');
const getSingelPost = require('../../controllers/v1/Posts/getSingelPost');
const VerifyUser = require('../../middlewares/Auth/Verifyuser');
const UpdatePost = require('../../controllers/v1/Posts/UpdatePost');
const ViewCount = require('../../controllers/v1/Posts/ViewCount');
const PopularPost = require('../../controllers/v1/Posts/PopularPost');
const RemovePost = require('../../controllers/v1/Posts/RemovePost');
const UserPosts = require('../../controllers/v1/Posts/UserPosts');
const ChangeStatus = require('../../controllers/v1/Posts/ChangeStatus');

// const VerifyTourGuide = require("../../middlewares/Auth/VerifyTourGuide");
// const ChangeStatus = require('../../controllers/v1/Posts/ChangeStatus');
// const CancelBooking = require('../../controllers/v1/Posts/CancelBooking');
// const CheckBooking = require('../../controllers/v1/Posts/CheckBooking');
const Post = require('express').Router();

Post.post('/' , VerifyUser,  AddPost);

Post.get('/all' , UserPosts);

Post.get('/approved' , getPosts);

Post.get('/singel/:id' , getSingelPost );

Post.get('/my-posts' , VerifyUser ,  MyPosts );

Post.get('/popular'  ,  PopularPost );

Post.put('/update/:id' , VerifyUser ,  UpdatePost );

Post.put('/views/:id' , VerifyUser ,  ViewCount );

Post.patch('/approve/:id' , VerifyUser ,  ChangeStatus );

Post.delete('/remove/:id' , VerifyUser ,  RemovePost );







  
module.exports = Post;  