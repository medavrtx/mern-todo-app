function Modal(props) {
  async function deleteHandler() {
    await fetch(`http://localhost:5000/todos/delete`, {
      method: 'DELETE',
    });
    props.getTasks();
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={deleteHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
