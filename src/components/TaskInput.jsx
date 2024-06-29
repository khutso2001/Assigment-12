import { Component } from "react";

class TaskInput extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.addTask !== this.props.addTask ||
      nextProps.onChange !== this.props.onChange ||
      nextProps.inputValue !== this.props.inputValue
    ) {
      return true;
    }

    return false;
  }

  render() {
    console.log("TASK INPUT RENDER");

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
