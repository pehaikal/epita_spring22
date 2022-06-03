const express = require('express');

const Router = express.Router();

const todos = [];

// GET /todos
Router.get('/', (request, response) => {
    return response.status(200).json(todos);
})  // end of get


// POST /todos
Router.post('/', (request, response) => {
    const {todo}  = request.body;
    todos.push(todo)
    return response.status(200).json(todo);
})  // end of post


// PUT /todos
Router.put('/:index', (request, response) => {
    const {index} = request.params;
    console.log(index);
}) // end of put

module.exports = Router;