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
  componentDidMount() {
    setInterval(() => {
      this.setState((prev) => ({
        unfulfilledTasks: [
          { task: "create React project with component did mount ", id: 1 },
          { task: "create Other project with component did mount", id: 2 },
        ],
      }));
    }, 2000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.inputValue !== this.state.inputValue ||
      nextState.unfulfilledTasks.length !==
        this.state.unfulfilledTasks.length ||
      nextState.completeTasks.length !== this.state.completeTasks.length
    ) {
      return true;
    }

    for (let i = 0; i < nextState.unfulfilledTasks.length; i++) {
      if (
        nextState.unfulfilledTasks[i].id !==
          this.state.unfulfilledTasks[i].id ||
        nextState.unfulfilledTasks[i].task !==
          this.state.unfulfilledTasks[i].task
      ) {
        return true;
      }
    }

    for (let i = 0; i < nextState.completeTasks.length; i++) {
      if (
        nextState.completeTasks[i].id !== this.state.completeTasks[i].id ||
        nextState.completeTasks[i].task !== this.state.completeTasks[i].task
      ) {
        return true;
      }
    }

    return false;
  }
  render() {
    console.log("MAIN.JS RENDER");
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
