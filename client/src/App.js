import { useState, useEffect, useCallback } from 'react';

import ClearButton from './components/todo/ClearButton';
import Modal from './components/ui/Modal';
import Backdrop from './components/ui/Backdrop';
import TodoList from './components/todo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTodoshandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/todos`);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTodoshandler();
  }, [fetchTodoshandler]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="main">
      <h1>To-Do List</h1>
      <TodoList
        todos={todos}
        isLoading={isLoading}
        error={error}
        fetchTodos={fetchTodoshandler}
        setTodos={setTodos}
      />
      <ClearButton onClick={deleteHandler} />
      {modalIsOpen && <Modal close={closeModalHandler} setTodos={setTodos} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default App;
