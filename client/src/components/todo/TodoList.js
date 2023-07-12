import AddTodo from '../todo/AddTodo';
import TodoItem from './TodoItem';

function TodoList({ todos, isLoading, error, fetchTodos, setTodos }) {
  return (
    <div className="todo-list">
      {!todos.length && isLoading && <h3>Loading...</h3>}
      {!todos.length && !isLoading && error && (
        <div id="error">
          <h3>Error: Something went wrong</h3>
          <button className="btn btn--error" onClick={fetchTodos}>
            Refresh
          </button>
        </div>
      )}
      {!todos.length && !isLoading && !error && <h3>No tasks! 😊</h3>}
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            task={todo.task}
            id={todo._id}
            setTodos={setTodos}
            todos={todos}
            getTasks={fetchTodos}
          />
        );
      })}
      <AddTodo getTasks={fetchTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoList;
