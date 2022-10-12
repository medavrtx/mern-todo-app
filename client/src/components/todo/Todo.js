import classes from './Todo.module.css';
import { useRef } from 'react';

function Todo(props) {
  const checkbox = useRef();
  console.log(props);

  async function deleteHandler() {
    await fetch(`http://localhost:5000/${props.id}`, {
      method: 'DELETE',
    });
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
        onClick={deleteHandler}
      />
      <h2>{props.task}</h2>
    </div>
  );
}

export default Todo;
