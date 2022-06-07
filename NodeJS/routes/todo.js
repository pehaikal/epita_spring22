const express = require('express');

const Router = express.Router();

let todos = [{
    "id": 1,
    "label": "label test 1",
    "isDone": true
    },
    
    {
    "id": 2,
    "label": "label test 2",
    "isDone": true
    },
    
    {
    "id": 3,
    "label": "label test 3",
    "isDone": true
    }];

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
    const todo  = request.body;
    
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

    console.log(todos);

    console.log("------------ deleting -------------");

    todos.splice(index, 1);
    console.log(todos);

    return response.status(200).json(todos);
}) // end of delete

module.exports = Router;