const express = require('express');

const router = express.Router();

const getDb = require('../util/database').getDb;
const todoControllers = require('../controllers/todo');

const ObjectId = require('mongodb').ObjectId;

// Fetch all todos
router.get('/todos', todoControllers.getTodos);

// Create new todo
router.post('/todos/add', todoControllers.postAddTodo);

// Delete todo
router.delete('/:id', todoControllers.postDeleteTodo);

// Delete all todo
router.delete('/todos/delete', todoControllers.postDeleteAll);

module.exports = router;
