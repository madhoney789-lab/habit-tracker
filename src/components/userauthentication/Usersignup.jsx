import React, { useState } from 'react'
import "./Auth.css";

const Usersignup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(
            (user) => user.email === form.email,
        );

        if (existingUser) {
            alert("An account with this email already exists.");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: form.name,
            email: form.email,
            password: form.password,
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem(
            "currentUser",
            JSON.stringify(newUser)
        );

        onSwitchToLogin();
    };
    return (
        <div> <h1>Create Account 🚀</h1>

            <p className="subtitle">
                Start building better habits today.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Full Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        minLength="6"
                        required
                    />
                </div>

                <button className="submit-btn" type="submit">
                    Create Account
                </button>
            </form>

            <p className="switch-text">
                Already have an account?

                <button onClick={onSwitchToLogin}>
                    Login
                </button>
            </p>
        </div>
    )
}

export default Usersignup