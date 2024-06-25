import { Component } from "react";
import DoneTasks from "./DoneTask";
import UnfulfilledTasks from "./UnfulfilledTask";
import TaskInput from "./TaskInput";
class Mian extends Component {
  state = {
    inputValue: "",
    unfulfilledTasks: [
      { task: "create React project", id: 1 },
      { task: "create Other project", id: 2 },
    ],
    completeTasks: [],
  };
  deleteTask = (id) => {
    const deleteTask = this.state.completeTasks.filter(
      (task) => task.id !== id
    );
    this.setState({
      completeTasks: deleteTask,
    });
  };
  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
    });
  };

  addTask = (event) => {
    event.preventDefault();

    const unfulfilledTask = {
      id: this.state.unfulfilledTasks.length + 1,
      task: this.state.inputValue,
    };
    this.setState({
      unfulfilledTasks: [...this.state.unfulfilledTasks, unfulfilledTask],
      inputValue: "",
    });
  };

  completeTasks = (id) => {
    const complete = {
      id: this.state.completeTasks.length + 1,
      task: this.state.unfulfilledTasks.task,
    };
    this.setState({
      completeTasks: [...this.state.completeTasks, complete],
    });
  };
  undo = (id) => {
    const undo = {
      id: this.state.unfulfilledTasks.length + 1,
      task: this.state.unfulfilledTasks.id,
    };
    this.setState({
      unfulfilledTasks: [...this.state.unfulfilledTasks, undo],
    });
  };
  render() {
    return (
      <div className="UnfulfilledTasks">
        <TaskInput
          addTask={this.addTask}
          state={this.state}
          inputValue={this.inputValue}
          onChange={this.onChange}
        />
        <div className="tasks">
          <UnfulfilledTasks
            state={this.state}
            completeTasks={this.completeTasks}
          />
          <DoneTasks
            state={this.state}
            deleteTask={this.deleteTask}
            completeTasks={this.completeTasks}
            undo={this.undo}
          />
        </div>
      </div>
    );
  }
}

export default Mian;
