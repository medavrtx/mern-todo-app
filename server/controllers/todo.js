const Todo = require('../models/todo');

exports.getTodos = (req, res, next) => {
  Todo.fetchAll()
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
};

exports.postAddTodo = (req, res, next) => {
  const task = req.body.task;
  const todo = new Todo(task);
  todo.save();
  res.status(201).json({
    message: 'To Do Added successfully!',
    todo: todo,
  });
};

exports.postDeleteTodo = (req, res, next) => {
  const { id } = req.params;
  Todo.deleteById(id);
};

exports.postDeleteAll = (req, res, next) => {
  Todo.deleteAll();
};
