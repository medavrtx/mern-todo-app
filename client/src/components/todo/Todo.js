function Todo(props) {
  return (
    <div className="card">
      <input className="check" type="checkbox" />
      <h2>{props.task}</h2>
      <div className="actions"></div>
    </div>
  );
}

export default Todo;
