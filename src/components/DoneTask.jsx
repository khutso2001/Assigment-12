import { Component } from "react";

class DoneTasks extends Component {
  render() {
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
