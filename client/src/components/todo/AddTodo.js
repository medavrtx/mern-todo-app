function AddTodo() {
  return (
    <div className="card card--add">
      <form className="add-form">
        <label htmlFor="task" />
        <input
          type="text"
          className="input"
          id="task"
          placeholder="Add a task"
          required
        ></input>
        <button className="btn">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
