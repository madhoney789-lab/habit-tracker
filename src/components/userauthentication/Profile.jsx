import { useState } from "react";
import "./Profile.css";

function Profile({ onLogOut }) {
    // we are getting the list of the users that currently loggedin in the application
    const currentUser = JSON.parse(localStorage.getItem("current user")) || {};

    // we are using the use state so that user will be able to change their name
    const [user, setUser] = useState(currentUser)

    // now we have to track whether the user is editing the profile or not we have track that
    const [isEditing, setIsEditing] = useState(false);

    // This code creates a state object called form to hold the values the user will use when editing their profile.
    const [form, setForm] = useState({
        name: user.name || "",
        email: user.email || "",
        password: user.password || "",
    });

    // "Keep all the existing form values, find the input the user changed, and update only that field with its new value
    // this is what this function does
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
}

export default Profile