import Taskcard from "./Taskcard";

function TaskList({ tasks, deleteTask, toggleComplete }) {

  if (tasks.length === 0) {
    return (
      <h3 className="empty-message">
        No tasks yet. Add your first task 🚀
      </h3>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <Taskcard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}

    </div>
  );
}

export default TaskList;