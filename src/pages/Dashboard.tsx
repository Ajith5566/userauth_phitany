import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// API functions for Todo CRUD
import {
  addTodoApi,
  getTodosApi,
  updateTodoApi,
  deleteTodoApi,
} from "../service/allApi";

// Type definition for a Todo item
interface Todo {
  _id: string;
  task: string;
  status: boolean;
}

function Dashboard() {
  // -----------------------------
  // STATE MANAGEMENT
  // -----------------------------

  // Track whether user is logged in
  const [isLogin, setIsLogin] = useState<boolean>(false);

  // Store new task input value
  const [newTask, setNewTask] = useState("");

  // Store all todos fetched from backend
  const [todos, setTodos] = useState<Todo[]>([]);

  const navigate = useNavigate();

  // Get logged-in user details from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("existingUser") || "{}");

  // -----------------------------
  // FETCH TODOS (USER-SPECIFIC)
  // -----------------------------
  // This function fetches todos for the logged-in user
  // Backend uses JWT to identify the user (req.userId)
  const fetchTodos = async () => {
    try {
      const res = await getTodosApi();
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // -----------------------------
  // CHECK LOGIN ON PAGE LOAD
  // -----------------------------
  // Runs once when Dashboard loads
  // If token exists → user is logged in → fetch their todos
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true);
      fetchTodos();
    }
  }, []);

  // -----------------------------
  // ADD NEW TODO
  // -----------------------------
  const addTask = async () => {
    // Prevent empty task submission
    if (!newTask.trim()) {
      alert("Please enter a task");
      return;
    }

    try {
      // Send task to backend
      await addTodoApi(newTask);

      // Clear input after success
      setNewTask("");

      // Refresh todo list
      fetchTodos();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // -----------------------------
  // TOGGLE TODO STATUS (DONE / NOT DONE)
  // -----------------------------
  const toggleStatus = async (id: string, status: boolean) => {
    try {
      // Update status in backend
      await updateTodoApi(id, { status: !status });

      // Refresh list
      fetchTodos();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // -----------------------------
  // DELETE TODO
  // -----------------------------
  const deleteTask = async (id: string) => {
    try {
      await deleteTodoApi(id);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // -----------------------------
  // LOGOUT USER
  // -----------------------------
  const logout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Update UI state
    setIsLogin(false);

    // Redirect to login page
    navigate("/loginpage");
  };

  // -----------------------------
  // UI RENDERING
  // -----------------------------
  return (
    <div className="dashboard-bg">
      <h1 className="main-heading">Welcome to ToDo App 🚀</h1>

      <div className="dashboard-container">
        {/* Logout button shown only if user is logged in */}
        {isLogin && (
          <div className="logout-row">
            <button className="btn logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        )}

        {/* User-specific heading */}
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
          {/* If NOT logged in */}
          {!isLogin ? (
            <div className="unauth-box">
              <h3>Unauthorized ❌</h3>
              <p>You need to login to view your tasks.</p>
              <button
                className="btn login-btn"
                onClick={() => navigate("/loginpage")}
              >
                Go to Login
              </button>
            </div>
          ) : (
            <>
              {/* ADD TASK SECTION */}
              <div className="add-task">
                <input
                  type="text"
                  placeholder="Add a new task..."
                  className="task-input"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn add-btn" onClick={addTask}>
                  Add
                </button>
              </div>

              {/* TODO LIST */}
              <ul className="task-list">
                {todos.map((task) => (
                  <li
                    key={task._id}
                    className={`task-item ${task.status ? "task-done" : ""}`}
                  >
                    <div className="task-left">
                      <input
                        type="checkbox"
                        checked={task.status}
                        onChange={() =>
                          toggleStatus(task._id, task.status)
                        }
                      />
                      <span className={task.status ? "completed" : ""}>
                        {task.task}
                      </span>
                    </div>

                    <div className="task-right">
                      <button
                        className="btn small-btn delete-btn"
                        onClick={() => deleteTask(task._id)}
                      >
                        Delete
                      </button>
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
