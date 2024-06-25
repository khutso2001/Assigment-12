import { Component } from "react";

class TaskInput extends Component {
  render() {
    const { addTask, onChange, inputValue } = this.props;
    return (
      <form className="add-task">
        <input
          type="text"
          placeholder="enret task..."
          onChange={onChange}
          value={inputValue}
        />
        <button type="submit" onClick={addTask}>
          Add Task
        </button>
      </form>
    );
  }
}
export default TaskInput;
