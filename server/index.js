const tasks = require("./routes/tasks");
const connection = require('./db');
const cors = require("cors");
const express = require('express');
const { connections } = require('mongoose');
const app = express()
const MongoClient = require('mongodb').MongoClient

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/todo-app'
mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


// connection();
app.use(express.json())
app.use(cors())

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}...'))