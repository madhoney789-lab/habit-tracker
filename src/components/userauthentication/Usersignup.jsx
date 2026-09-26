import React from 'react'

const Usersignup = () => {
    const [form, setForm] = ({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>Usersignup</div>
    )
}

export default Usersignup