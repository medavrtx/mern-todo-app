const express = require('express');

const todoRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

// Fetch all todos
todoRoutes.route('/todos').get(function (req, res) {
  let db_connect = dbo.getDb('todo-app');
  db_connect
    .collection('todos')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Create new todo
todoRoutes.route('/todos/add').post(function (req, response) {
  let db_connect = dbo.getDb();
  console.log(req.body.task);
  let myobj = {
    task: req.body.task,
  };
  db_connect.collection('todos').insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Delete todo
todoRoutes.route('/:id').delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection('todos').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 task deleted');
    response.json(obj);
  });
});

// Delete all todo
todoRoutes.route('/todos/delete').delete((req, response) => {
  let db_connect = dbo.getDb();
  db_connect.collection('todos').deleteMany({}, function (err, removed) {
    if (err) throw err;
    console.log('All task(s) deleted');
    response.json(removed);
  });
});

module.exports = todoRoutes;
