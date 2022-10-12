import classes from './AddTodo.module.css';

function AddTodo() {
  return (
    <div className={classes.addCard}>
      <form>
        <label htmlFor="task" />
        <input type="text" id="task" placeholder="Add a task" required></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
