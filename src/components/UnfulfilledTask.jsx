import { Component } from "react";
class UnfulfilledTasks extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.state.unfulfilledTasks.length !==
      this.props.state.unfulfilledTasks.length
    ) {
      return true;
    }

    for (let i = 0; i < nextProps.state.unfulfilledTasks.length; i++) {
      if (
        nextProps.state.unfulfilledTasks[i].id !==
          this.props.state.unfulfilledTasks[i].id ||
        nextProps.state.unfulfilledTasks[i].task !==
          this.props.state.unfulfilledTasks[i].task
      ) {
        return true;
      }
    }

    return false;
  }
  render() {
    const { state, completeTasks } = this.props;
    console.log("UNFUL FILLED RENDER");

    return (
      <div className="unfulfilled">
        <h3>unfulfilled Task</h3>
        <div>
          {state.unfulfilledTasks.map((task) => (
            <div className="unfulfilled-task" key={task.id}>
              <p>
                ID: {task.id} TASK: {task.task}
              </p>

              <button onClick={() => completeTasks(task.id)}>Finish</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UnfulfilledTasks;
