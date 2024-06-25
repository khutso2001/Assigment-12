import "./App.css";
import { Component } from "react";
class App extends Component {
  state = {
    inputValue: "",
    unfulfilledTasks: [
      { task: "create React project", id: 1 },
      { task: "create Other project", id: 2 },
    ],
    completeTasks: [],
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

  deleteTask = (id) => {
    const deleteTask = this.state.completeTasks.filter(
      (task) => task.id !== id
    );
    this.setState({
      completeTasks: deleteTask,
    });
  };
  completeTasks = (id) => {
    const complete = {
      id: this.state.completeTasks.length + 1,
      task: this.state.unfulfilledTasks.id,
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
      <div className="App">
        <form onSubmit={this.addTask} className="add-task">
          <input
            type="text"
            placeholder="enret task..."
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button type="submit">Add Task</button>
        </form>
        <div className="tasks">
          <div className="unfulfilled">
            <h3>unfulfilled Task</h3>
            <div className="unfulfilled-task">
              {this.state.unfulfilledTasks.map((task) => (
                <div key={task.id}>
                  <p>
                    ID: {task.id} TASK: {task.task}
                  </p>

                  <button onClick={() => this.completeTasks(task.id)}>
                    Finish
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="done">
            <h3>Done Task</h3>
            <div className="done-task">
              {this.state.completeTasks.map((task) => (
                <div key={task.id}>
                  <p>
                    ID: {task.id} TASK: {task.task}
                  </p>
                  <button onClick={() => this.deleteTask(task.id)}>
                    Delete
                  </button>
                  <button onClick={() => this.undo(task.id)}>
                    undo in unfulfilled
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
