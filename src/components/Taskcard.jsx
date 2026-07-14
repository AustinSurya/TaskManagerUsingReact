import { FaTrash, FaCheckCircle } from "react-icons/fa";

function TaskCard({ task, deleteTask, toggleComplete }) {

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>

      <h3>{task.text}</h3>

      <p>
        Status :
        <strong>
          {task.completed ? " Completed" : " Pending"}
        </strong>
      </p>

      <div className="task-actions">

        <button
          className="complete-btn"
          onClick={() => toggleComplete(task.id)}
        >
          <FaCheckCircle />
          Complete
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;