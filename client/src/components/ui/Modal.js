function Modal(props) {
  async function deleteHandler() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/todos/delete`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      await response.json();
    } catch (error) {
      console.log(error);
    }
    props.setTodos([]);
    props.close();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.close}>
        Cancel
      </button>
      <button className="btn" onClick={deleteHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
