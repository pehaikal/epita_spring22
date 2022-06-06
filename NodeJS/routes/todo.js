const express = require('express');

const Router = express.Router();

const todos = [];

/*
Todo: {
    id: 1,
    label: 'label test',
    isDone: true,
}
*/

// GET /todos
Router.get('/', (request, response) => {

    let data = request.body;
    console.log(data);

    
    for(const index = 0; index < todos.length; index++) {
        todos.push(data[index]);
    }
    

    // OR

    /*
    data.map((todo) => {
        todos.push(todo);
    });
    */

    // OR

    // todos = [...data];

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
    const {index} = request.params; // OR const index = request.params.index;
    const todo  = request.body;
    todos[index] = todo;

    console.log(todo);

    return response.status(200).json(todos);
}) // end of put


// DELETE /todos
Router.delete('/:index', (request, response) => {
    const {index} = request.params;
    const todo  = request.body;
    todos[index] = todo;

    console.log(todo);
    console.log("------------ deleting -------------");
    
    delete todos.splice(index, 1);
    console.log(todo);

    return response.status(200).json(todos);
}) // end of delete

module.exports = Router;