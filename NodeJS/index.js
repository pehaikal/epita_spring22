// framework to create API
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

try{
  mongoose.connect('mongodb://127.0.0.1:27018/epita', {
    authSource: "admin",
    user: "root",
    pass: "example",
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('Connected to DB !');

} catch (error) {
    console.log('Error connecting to MongoDB', error);
}

const todoRouter = require('./routes/todo');
const messageRouter = require('./routes/messageRoute');
const userRouter = require('./routes/authRoute');

// let bodyParser = require('body-parser');

// Create a new express application instance
const app = express();

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/

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

app.use('/todos', todoRouter);
app.use('/messages', messageRouter);
app.use('/users', userRouter);

const PORT = 4500
app.listen(4500, function() {
  console.log(`Server is running on http://localhost:${PORT}`);
});