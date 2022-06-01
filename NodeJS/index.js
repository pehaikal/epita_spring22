const express = require('express');
let bodyParser = require('body-parser');

const todoRouter = require('./routes/todo');

// Create a new express application instance
const app = express();

app.use(express.json());
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/

app.get('/', (request, response) => {
  response.status(200).send('It works!');
});

const PORT = 4500
app.use('/todos', todoRouter);

app.listen(4500, function() {
  console.log(`Server is running on http://localhost:${PORT}`);
});