import React, { useState } from 'react'
import './RegistrationForm.css'
import type { FormData, FormErrors } from "../types/form_type";
import { registerApi } from '../service/allApi';
import { AxiosError } from "axios";
import { toast } from "react-toastify";
function Registration_form() {

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // State to toggle confirm password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Main form data state
    const [Data, setData] = useState<FormData>({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handle change for every input field dynamically
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            ...Data,
            [e.target.id]: e.target.value,
        };

        setData(newData);        // Update state
        //console.log(newData);    // Show updated values
    };

    // Error state for storing validation errors
    const [errors, setErrors] = useState<FormErrors>({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Validate all input values before submit
    const validate = (): boolean => {
        const newErrors: Partial<FormErrors> = {};

        // Validate Name
        if (!Data.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(Data.name)) {
            newErrors.name = "Name cannot contain numbers or special characters";
        }

        // Validate Mobile Number (must be exactly 10 digits)
        if (!/^[0-9]{10}$/.test(Data.mobile)) {
            newErrors.mobile = "Mobile number must be 10 digits";
        }

        // Validate Email format
        if (!/^\S+@\S+\.\S+$/.test(Data.email)) {
            newErrors.email = "Enter a valid email";
        }

        // Validate Password length
        if (Data.password.trim().length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        // Check passwords must match
        if (Data.password !== Data.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors as FormErrors); // Store errors in state

        return Object.keys(newErrors).length === 0; // Return true only if no errors
    };

    // On form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            const result = await registerApi(Data);
            console.log(result);


           toast.success("Registration completed successfully");

            setData({
                name: "",
                mobile: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

            setErrors({
                name: "",
                mobile: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message || "Something went wrong");
            } else {
                alert("Unknown error occurred");
            }
        }
    };


    return (
        <>
            <div className="register-page">
                <div className="register-overlay" />
                <div className="register-card">
                    <h2 className="form-title">Create Account ✨</h2>
                    <p className="form-subtitle">
                        Join the community and start your journey today.
                    </p>

                    <form onSubmit={handleSubmit} className="register-form">
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className={`form-input ${errors.name ? "input-error" : ""}`}
                                id="name"
                                value={Data.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>

                        {/* Mobile */}
                        <div className="form-group">
                            <label htmlFor="mobile" className="form-label">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                className={`form-input ${errors.mobile ? "input-error" : ""}`}
                                id="mobile"
                                value={Data.mobile}
                                onChange={handleChange}
                                placeholder="9876543210"
                            />
                            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="text"
                                className={`form-input ${errors.email ? "input-error" : ""}`}
                                id="email"
                                value={Data.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                            <small className="helper-text">
                                We'll never share your email ❤️
                            </small>
                        </div>

                        {/* Password */}
                        <div className="form-group password-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={`form-input ${errors.password ? "input-error" : ""}`}
                                    id="password"
                                    value={Data.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                />
                                <span
                                    className="toggle-icon"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "🔓" : "🔒"}
                                </span>
                            </div>
                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="form-group password-group">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <div className="password-wrapper">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className={`form-input ${errors.confirmPassword ? "input-error" : ""
                                        }`}
                                    id="confirmPassword"
                                    value={Data.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                />
                                <span
                                    className="toggle-icon"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? "🔓" : "🔒"}
                                </span>
                            </div>
                            {errors.confirmPassword && (
                                <p className="error-text">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <button className="btn-primary-custom" type="submit">
                            Register ✨
                        </button>

                        <p className="form-footer-text">
                            Already have an account? <span className="link-text"><a href='/loginpage'>Log in</a></span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration_form
