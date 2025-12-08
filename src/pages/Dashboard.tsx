import React from "react";

function Dashboard() {
  const sampleTasks = [
    { id: 1, title: "Complete MERN Task", status: true },
    { id: 2, title: "Prepare Resume", status: false },
    { id: 3, title: "Workout 30 mins", status: false },
  ];

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#374151" }}>
        My To-Do List ✨
      </h2>

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow border-0 p-3 rounded-4">
            
            <div className="d-flex mb-3">
              <input
                type="text"
                placeholder="Enter a task..."
                className="form-control rounded-3 me-2"
              />
              <button className="btn btn-primary rounded-3 px-4">Add</button>
            </div>

            <ul className="list-group">
              {sampleTasks.map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-center rounded-3 mb-2"
                  style={{
                    border: "1px solid #E5E7EB",
                    background: task.status
                      ? "rgba(16, 185, 129, 0.15)"
                      : "#ffffff",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={task.status}
                      readOnly
                    />
                    <span
                      style={{
                        textDecoration: task.status ? "line-through" : "none",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      {task.title}
                    </span>
                  </div>

                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
