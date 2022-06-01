const express = require('express');

const Router = express.Router();

const todos = [];


// GET /todos
Router.get('/', (request, response) => {
    response.status(200).json(todos);
})  // end of get


// POST /todos
Router.post('/', (request, response) => {
    const {todo}  = request.body;

    todos.push(todo)

    response.status(200).json(todo);
})  // end of post


module.exports = Router;