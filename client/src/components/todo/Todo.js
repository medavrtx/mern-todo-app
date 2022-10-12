import classes from './Todo.module.css';

function Todo(props) {
  return (
    <div className={classes.card}>
      <input className="check" type="checkbox" />
      <h2>{props.task}</h2>
    </div>
  );
}

export default Todo;
