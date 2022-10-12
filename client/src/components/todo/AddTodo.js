import classes from './AddTodo.module.css';
import { useState } from 'react';

function AddTodo() {
  const [form, setForm] = useState({ task: '' });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newTask = { ...form };

    await fetch('http://localhost:5000/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    }).catch((err) => {
      console.log(err);
      return;
    });

    setForm({ task: '' });
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
