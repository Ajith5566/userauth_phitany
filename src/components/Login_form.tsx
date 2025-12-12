import React, { useState } from 'react';
import './loginform.css';
import type { Lform, Lformerror, LoginResponse} from '../types/form_type';
import { loginApi } from '../service/allApi';
import { useNavigate } from 'react-router-dom';
import type { AxiosResponse } from "axios";


function Login_form() {

  // State for controlling password visibility (toggle show/hide)
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();  //for navigation
  // State to store user login form data
  const [Data, setData] = useState<Lform>({
    email: "",
    password: "",
  });

  /**
   * Handle user input dynamically
   * e.target.id → maps to corresponding field (email/password)
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...Data,
      [e.target.id]: e.target.value,
    };

    setData(newData);   // Update form state
    console.log(newData); // Debug updated values
  };

  // State to store validation error messages
  const [errors, setErrors] = useState<Lformerror>({
    email: "",
    password: "",
  });

  /**
   * Validate form fields before submitting
   * returns true only if all validations pass
   */
  const validate = (): boolean => {
    const newErrors: Partial<Lformerror> = {};

    // Email validation using regex format
    if (!/^\S+@\S+\.\S+$/.test(Data.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password must be minimum 6 characters
    if (Data.password.trim().length < 6) {
      newErrors.password = "Enter your Password";
    }

    // Update error state for displaying messages
    setErrors(newErrors as Lformerror);

    // if no errors, return true
    return Object.keys(newErrors).length === 0;
  };


  /**
   * Submit handler for form
   * Prevents refresh and validates first
   */
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    // Stop execution if validation fails
    if (!validate()) return;

    console.log("Form Data Submitted:", Data);
     const result = await loginApi(Data) as AxiosResponse<LoginResponse>;

if (result.status === 200) {
  sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser));
  sessionStorage.setItem("token",result.data.token)
  alert("login success");

  setData({ email: "", password: "" });
  setErrors({ email: "", password: "" });

  navigate("/dash");
}

    
  };


  return (
    <>
      <div className="login-card shadow-lg">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue your journey</p>

        <form onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="mb-3 position-relative">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control rounded-3 login-input"
              placeholder="Enter your email"
              value={Data.email}
              onChange={handleChange}
              id='email'
            />
            {/* Show error if exists */}
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
            )}
          </div>

          {/* Password Field with eye icon */}
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>

            <input
              type={showPassword ? "text" : "password"} // toggle password visibility
              className="form-control rounded-3"
              id="password"
              value={Data.password}
              onChange={handleChange}
            />

            {/* Show error if exists */}
            {errors.password && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
            )}

            {/* Password toggle icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "38px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {showPassword ? "🔓" : "🔒"}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="d-flex justify-content-between mb-3">
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn login-btn">
            Login
          </button>
        </form>

        {/* Navigation to Register Page */}
        <p className="signup-text">
          Don't have an account? <a href="/registration">Register</a>
        </p>
      </div>
    </>
  );
}

export default Login_form;
