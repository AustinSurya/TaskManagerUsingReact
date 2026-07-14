function Stats({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="stats">

      <div className="card total">
        <h3>Total Tasks</h3>
        <p>{total}</p>
      </div>

      <div className="card pending">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>

      <div className="card completed">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

    </div>
  );
}

export default Stats;