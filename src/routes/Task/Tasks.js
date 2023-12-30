const AddStory = require("../../controllers/v1/tasks/AddTask");
const ChangeStatus = require("../../controllers/v1/tasks/ChangeStatus");
const TaskDetails = require("../../controllers/v1/tasks/TaskDetails");
const UpdateTask = require("../../controllers/v1/tasks/UpdateTask");
const gettasks = require("../../controllers/v1/tasks/getTask");
const SearchTask = require("../../controllers/v1/tasks/SearchTask");
const getTodayTask = require("../../controllers/v1/tasks/getTodayTask");
// const SingelStory = require("../../controllers/v1/Story/SingelStory");
// const getStorys = require("../../controllers/v1/Story/getStorys");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");
const DeleteTask = require("../../controllers/v1/tasks/DeleteTask");

const tasks = require("express").Router()

tasks.get("/all" , VerifyUser , gettasks);
tasks.get("/search" , VerifyUser , SearchTask);
tasks.get("/singel/:id" , VerifyUser , TaskDetails);
tasks.get("/today" , VerifyUser , getTodayTask);
tasks.post("/" , VerifyUser , AddStory);
tasks.put("/:id" , VerifyUser , UpdateTask);
tasks.patch("/status/:id" , VerifyUser , ChangeStatus);
tasks.delete("/:id" , VerifyUser , DeleteTask);



module.exports = tasks;   

 