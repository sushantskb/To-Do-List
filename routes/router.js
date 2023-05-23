const app = require('express')();

// import controller
const todoController = require('../controllers/todo.controller');

app.get("/", todoController.MainPage);

app.post("/", todoController.ActionMainPage);

app.get("/work", todoController.workRoute)

module.exports = app;