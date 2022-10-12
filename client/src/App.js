import { useState } from 'react';
import AddTodo from './components/todo/AddTodo';
import ClearButton from './components/todo/ClearButton';
import Todo from './components/todo/Todo';

function App() {
  const [todos, setTodos] = useState([{ id: 'td1', task: 'Task 1' }]);

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
      <ClearButton />
    </div>
  );
}

export default App;
