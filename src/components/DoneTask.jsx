import { Component } from "react";

class DoneTasks extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.state.completeTasks.length !==
      this.props.state.completeTasks.length
    ) {
      return true;
    }
    for (let i = 0; i < nextProps.state.completeTasks.length; i++) {
      if (
        nextProps.state.completeTasks[i].id !==
          this.props.state.completeTasks[i].id ||
        nextProps.state.completeTasks[i].task !==
          this.props.state.completeTasks[i].task
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    console.log("DONE TASK RENDER");
    const { state, undo, deleteTask } = this.props;
    return (
      <div className="done">
        <h3>Done Task</h3>
        <div>
          {state.completeTasks.map((task) => (
            <div className="done-task" key={task.id}>
              <p>TASK: The task with ID: {task.id} is completed</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => undo(task.id)}>undo</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DoneTasks;
