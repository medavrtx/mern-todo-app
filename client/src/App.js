import { useState } from 'react';
import AddTodo from './components/todo/AddTodo';
import ClearButton from './components/todo/ClearButton';
import Todo from './components/todo/Todo';
import Modal from './components/ui/Modal';
import Backdrop from './components/ui/Backdrop';

function App() {
  const [todos, setTodos] = useState([{ id: 'td1', task: 'Task 1' }]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  console.log(modalIsOpen);

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
        <AddTodo />
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
