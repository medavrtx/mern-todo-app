import classes from './ClearButton.module.css';

function ClearButton(props) {
  return (
    <div className={classes.clearButton}>
      <button className="btn" onClick={props.onClick}>
        Clear All Tasks
      </button>
    </div>
  );
}

export default ClearButton;
