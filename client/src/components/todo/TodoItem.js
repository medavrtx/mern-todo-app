import classes from './Todo.module.css';
import { useRef } from 'react';

function TodoItem(props) {
  const checkbox = useRef();

  async function deleteTodoHandler() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/${props.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      await response.json();
    } catch (error) {
      throw new Error();
    }
    checkbox.current.checked = false;
    const newTodos = props.todos.filter((el) => el._id !== props.id);
    props.setTodos(newTodos);
  }

  return (
    <div className={classes.card}>
      <input
        className="check"
        type="checkbox"
        ref={checkbox}
        onClick={deleteTodoHandler}
      />
      <h2>{props.task}</h2>
    </div>
  );
}

export default TodoItem;
