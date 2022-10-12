import { useState, useEffect } from 'react';
import AddTodo from './components/todo/AddTodo';
import ClearButton from './components/todo/ClearButton';
import Todo from './components/todo/Todo';
import Modal from './components/ui/Modal';
import Backdrop from './components/ui/Backdrop';

function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function getTasks() {
    const response = await fetch(`http://localhost:5000/todos`);

    if (!response.ok) {
      const message = `An error occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const todos = await response.json();
    setTodos(todos);
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
        <AddTodo getTasks={getTasks} />
      </div>
      <ClearButton onClick={deleteHandler} />
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default App;
