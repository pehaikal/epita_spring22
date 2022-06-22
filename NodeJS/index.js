// framework to create API
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

try{
  mongoose.connect(process.env.DB_URL, {
    authSource: "admin",
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('Connected to DB !');

} catch (error) {
    console.log('Error connecting to MongoDB', error);
}

const todoRouter = require('./routes/todo');
const messageRouter = require('./routes/messageRoute');
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');

// let bodyParser = require('body-parser');

// Create a new express application instance
const app = express();
app.use(cors());
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
*/

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: process.env.SESSION_SECURE === 'true' ? true : false,
    httpOnly: true 
  }
}))

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
app.use('/', authRouter);
app.use('/users', userRouter);

const PORT = 4500
app.listen(4500, function() {
  console.log(`Server is running on http://localhost:${PORT}`);
});