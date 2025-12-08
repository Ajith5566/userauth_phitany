import React, { useState } from 'react'
import './RegistrationForm.css'
import type { FormData, FormErrors } from "../types/form_type";

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
        console.log(newData);    // Show updated values
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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // To stop page refresh

        if (!validate()) return; // If invalid, stop submission

        console.log("Form Data Submitted:", Data); // Log final values

        // Reset form fields after successful submit
        setData({
            name: "",
            mobile: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        // Reset error messages as well
        setErrors({
            name: "",
            mobile: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <>
            <h2 className="form-title">Create Account ✨</h2>

            {/* Form Submit Handler */}
            <form onSubmit={handleSubmit}>

                {/* Name Field */}
                <div className="mb-3">
                    <label htmlFor="exampleInputname" className="form-label">
                        Full Name
                    </label>

                    {/* Controlled Input */}
                    <input type="text" className="form-control rounded-3" id="name" value={Data.name} onChange={handleChange} />

                    {/* Error Message Display */}
                    {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
                </div>

                {/* Mobile Number Field */}
                <div className="mb-3">
                    <label htmlFor="exampleInputnumber" className="form-label">
                        Mobile Number
                    </label>

                    <input type="tel" className="form-control rounded-3" id="mobile" value={Data.mobile} onChange={handleChange} />

                    {errors.mobile && <p style={{ color: "red", fontSize: "12px" }}>{errors.mobile}</p>}
                </div>

                {/* Email Field */}
                <div className="mb-3">
                    <label className="form-label">
                        Email Address
                    </label>

                    <input type="text" className="form-control rounded-3" id="email" value={Data.email} onChange={handleChange} />

                    {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}

                    <small className="text-secondary">
                        We'll never share your email ❤️
                    </small>
                </div>

                {/* Password Field */}
                <div className="mb-3 position-relative">
                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type={showPassword ? "text" : "password"}
                        className="form-control rounded-3"
                        id="password"
                        value={Data.password}
                        onChange={handleChange}
                    />

                    {errors.password && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.password}
                        </p>
                    )}

                    {/* Eye Icon Toggle */}
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
                        {showPassword ? "👁️" : "🙈"}
                    </span>
                </div>

                {/* Confirm Password Field */}
                <div className="mb-3 position-relative">
                    <label className="form-label">
                        Confirm Password
                    </label>

                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="form-control rounded-3"
                        id="confirmPassword"
                        value={Data.confirmPassword}
                        onChange={handleChange}
                    />

                    {errors.confirmPassword && (
                        <p style={{ color: "red", fontSize: "12px" }}>
                            {errors.confirmPassword}
                        </p>
                    )}

                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "38px",
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        {showConfirmPassword ? "👁️" : "🙈"}
                    </span>
                </div>

                {/* Submit Button */}
                <button className="btn-primary-custom" type='submit'>
                    Register ✨
                </button>
            </form>
        </>
    )
}

export default Registration_form
