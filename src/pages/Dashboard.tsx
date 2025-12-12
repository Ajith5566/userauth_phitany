import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState("");

  const user = JSON.parse(sessionStorage.getItem("existingUser") || "{}");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    setIsLogin(false);
    navigate("/loginpage");
  };

  const sampleTasks = [
    { id: 1, title: "Complete MERN Task", status: true },
    { id: 2, title: "Prepare Resume", status: false },
    { id: 3, title: "Workout 30 mins", status: false },
  ];

  return (
    <div className="dashboard-bg">
       {/* MAIN APP HEADING */}
        <h1 className="main-heading">Welcome to ToDo App 🚀</h1>
      <div className="dashboard-container">
        
        {/* Logout Button */}
        {isLogin && (
          <div className="logout-row">
            <button className="btn logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        )}

       

        {/* USER TASK TITLE */}
        <h2 className="dashboard-title">
          {user.username ? (
            <>
              <span className="dashboard-username">{user.username}</span>'s Tasks ✨
            </>
          ) : (
            "My To-Do List ✨"
          )}
        </h2>

        <div className="task-wrapper">
          {!isLogin ? (
            <div className="unauth-box">
              <h3>Unauthorized ❌</h3>
              <p>You need to login to view your tasks.</p>
              <button className="btn login-btn" onClick={() => navigate("/loginpage")}>
                Go to Login
              </button>
            </div>
          ) : (
            <>
              {/* Add Task Input */}
              <div className="add-task">
                <input
                  type="text"
                  placeholder="Add a new task..."
                  className="task-input"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn add-btn">Add</button>
              </div>

              {/* Task List Display */}
              <ul className="task-list">
                {sampleTasks.map((task) => (
                  <li
                    key={task.id}
                    className={`task-item ${task.status ? "task-done" : ""}`}
                  >
                    <div className="task-left">
                      <input type="checkbox" checked={task.status} readOnly />
                      <span className={task.status ? "completed" : ""}>
                        {task.title}
                      </span>
                    </div>

                    <div className="task-right">
                      <button className="btn small-btn edit-btn">Edit</button>
                      <button className="btn small-btn delete-btn">Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
