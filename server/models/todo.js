const getDb = require('../util/database').getDb;
const ObjectId = require('mongodb').ObjectId;

class Todo {
  constructor(task) {
    this.task = task;
  }

  save() {
    const db = getDb();
    db.collection('todos')
      .insertOne(this)
      .then((res) => {
        console.log('Successfully Added To Do');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('todos')
      .find()
      .toArray()
      .then((todos) => {
        return todos;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteById(todoId) {
    const db = getDb();
    db.collection('todos')
      .deleteOne({ _id: ObjectId(todoId) })
      .then((result) => {
        console.log('To Do Deleted Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteAll() {
    const db = getDb();
    db.collection('todos')
      .deleteMany()
      .then((result) => {
        console.log('All Todos Deleted!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Todo;
