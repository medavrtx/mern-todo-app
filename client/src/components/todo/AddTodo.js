import classes from './AddTodo.module.css';
import { useRef, useState } from 'react';

function AddTodo(props) {
  const taskInputRef = useRef();
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  async function addTodoHandler(event) {
    event.preventDefault();
    if (props.todos.length < 10) {
      const newTask = { task: enteredTask };
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/todos/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        });
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        await response.json();
      } catch (error) {
        throw new Error(error);
      }
      setEnteredTask('');
      props.getTasks();
      props.setTodos((currentTodos) => [...currentTodos, newTask]);
    } else {
      window.alert('Keep list at 10 tasks and below');
    }
  }

  return (
    <div className={classes.addCard}>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="task" />
        <input
          ref={taskInputRef}
          type="text"
          id="task"
          placeholder="Add a task"
          value={enteredTask}
          onChange={taskInputChangeHandler}
          required
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
