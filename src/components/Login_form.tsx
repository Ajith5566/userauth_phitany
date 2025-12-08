import React from 'react';
import './loginform.css';

function Login_form() {
  return (
    <>
        <div className="login-card shadow-lg">
          <h2 className="login-title">Welcome Back 👋</h2>
          <p className="login-subtitle">Login to continue your journey</p>

          <form>
            <div className="mb-3 position-relative">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control rounded-3 login-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control rounded-3 login-input"
                placeholder="Enter your password"
              />
            </div>

            <div className="d-flex justify-content-between mb-3">
              
              <a href="#" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn login-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <a href="/registration">Register</a>
          </p>
        </div>

    </>
  );
}

export default Login_form;
