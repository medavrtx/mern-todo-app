import classes from './AddTodo.module.css';
import { useState } from 'react';

function AddTodo(props) {
  const [form, setForm] = useState({ task: '' });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newTask = { ...form };

    if (props.todos.length < 10) {
      await fetch(`${process.env.REACT_APP_API}/todos/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      }).catch((err) => {
        console.log(err);
        return;
      });
      props.getTasks();
      setForm({ task: '' });
    } else {
      window.alert('Keep list at 10 tasks and below');
    }
  }

  return (
    <div className={classes.addCard}>
      <form onSubmit={onSubmit}>
        <label htmlFor="task" />
        <input
          type="text"
          id="task"
          placeholder="Add a task"
          value={form.task}
          onChange={(e) => updateForm({ task: e.target.value })}
          required
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
