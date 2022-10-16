import { useState, useEffect } from 'react';
import AddTodo from './components/todo/AddTodo';
import ClearButton from './components/todo/ClearButton';
import Todo from './components/todo/Todo';
import Modal from './components/ui/Modal';
import Backdrop from './components/ui/Backdrop';

function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getTasks() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/todos`);
      const todos = await response.json();
      setTodos(todos);
      setLoading(false);
      setError(false);
      return console.log("Todo's fetched!");
    } catch (err) {
      const message = `An error occured: ${err.message}`;
      setLoading(false);
      setError(true);
      throw console.log(message);
    }
  }

  useEffect(() => {
    getTasks();
    return;
  }, []);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="main">
      <h1>To-Do List</h1>
      <div className="todo-list">
        {!todos.length && loading && <h3>Loading...</h3>}
        {!todos.length && !loading && error && (
          <div id="error">
            <h3>Error</h3>
            <button className="btn btn--error" onClick={getTasks}>
              Refresh
            </button>
          </div>
        )}
        {!todos.length && !loading && !error && <h3>No tasks! 😊</h3>}
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              task={todo.task}
              id={todo._id}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
        <AddTodo getTasks={getTasks} todos={todos} />
      </div>
      <ClearButton onClick={deleteHandler} />
      {modalIsOpen && (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
          getTasks={getTasks}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default App;
