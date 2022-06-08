const express = require('express');
const Router = express.Router();
const { v4 : uuidv4 } = require('uuid');

let todos = [
    {
    "label": "test 1",
    "isDone": false,
    "id": uuidv4()
    },
    
    {
    "label": "test 2",
    "isDone": true,
    "id": uuidv4()
    },
    
    {
    "label": "test 3",
    "isDone": true,
    "id": uuidv4()
    }
];

/*
Todo: {
    id: 1,
    label: 'label test',
    isDone: true,
}
*/

// GET /todos
Router.get('/', (request, response) => {
    
    return response.status(200).json(todos)
    
    /*
    let data = request.body;
    console.log(data);

    // data.map((todo) => {
    //    todos.push(todo);
    // });

    // OR
    
    todos = [...data];

    return response.status(200).json(todos);
    */
})  // end of get


// POST /todos
Router.post('/', (request, response) => {
    const {todo} = request.body

    todo.id = uuidv4()

    todos.push(todo)

    return response.status(200).json(todo)
})  // end of post


// PUT /todos
Router.put('/:index', (request, response) => {
    const {index} = request.params; // OR const index = request.params.index;
    // const todo  = request.body;
    
    // const {test} = request.query // For params from url ?test=toto
    
    const {isDone, label} = request.body // from the body
    
    if (typeof todos[index] != 'undefined') {

        if (typeof isDone != 'undefined') {
            todos[index].isDone = isDone
        }

        if (typeof label != 'undefined') {
            todos[index].label = label
        }

    } else {
        return response.status(500).json({"msg": "Todo not found !"})
    }

    return response.status(200).json(todos[index])

    /*
    todos[index] = todo;

    console.log(todo);

    return response.status(200).json(todos);
    */
}) // end of put


// DELETE /todos
Router.delete('/:index', (request, response) => {
    const {index} = request.params;

    if (typeof todos[index] != 'undefined') {
        todos.splice(index, 1);
        return response.status(200).json({"msg": 'Todo deleted'});
    
    } else {
        return response.status(404).json({"msg": 'Todo not found'});
    }

    /*
    console.log(todos);
    console.log("------------ deleting -------------");

    todos.splice(index, 1);
    console.log(todos);

    return response.status(200).json(todos);
    */
}) // end of delete

module.exports = Router;