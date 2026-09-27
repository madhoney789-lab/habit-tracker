import React from 'react'

const Usersignup = () => {
    const [form, setForm] = ({
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
        <div>Usersignup</div>
    )
}

export default Usersignup