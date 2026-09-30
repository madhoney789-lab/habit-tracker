import React, { useState } from 'react'
import "./Auth.css";

const Userlogin = ({ onSwitchToSignUp }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handeChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (user) =>
                user.email === form.email &&
                user.password === form.password
        );

        if (!user) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("current user", JSON.stringify(user));

        alert(`Welcome back,${user.name}!`);
    }

    return (
        <div>
            <h1>Welcome Back 👋</h1>
            <p className="subtitle">
                Login to continue tracking your habits.
            </p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email"
                        name="email"
                        placeholder='Enter your email'
                        value={form.email}
                        onChange={handeChange}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password"
                        name="password"
                        placeholder='Enter your password'
                        value={form.password}
                        onChange={handeChange}
                        required
                    />
                </div>

                <button type='submit'>Login</button>

                <p>Don't have an account
                    <button onClick={onSwitchToSignUp}>Sign up</button>
                </p>
            </form>
        </div>
    )
}

export default Userlogin