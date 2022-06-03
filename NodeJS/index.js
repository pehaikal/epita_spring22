// framework to create API
const express = require('express');
const morgan = require('morgan');
const todoRouter = require('./routes/todo');

// let bodyParser = require('body-parser');

// Create a new express application instance
const app = express();


/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/
app.use(morgan('dev'));
app.use(express.json());

app.get('/', function (request, response){
  return response.status(200).send('It works !');
});

app.post('/test', (request, response) => {
  console.log(request.body);
  const {name} = request.body

  if(!name && name == "") {
    return response.status(500).json('You have to provide a name');
  }

  return response.status(200).json('Data received.');
});

app.get('/test', (request, response) => {
  return response.status(200).json('It works on /test !');
  
  // return response.status(200).json(`My name is ${name}`);
});

const PORT = 4500
app.use('/todos', todoRouter);

app.listen(4500, function() {
  console.log(`Server is running on http://localhost:${PORT}`);
});