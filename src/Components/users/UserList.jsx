import React, { useState } from "react";
import "./users.css";
import Button from "../ui/Button/Button";

export default function UserForm({ onAddUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !username || !phone) return;

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      username,
      phone,
    };

    onAddUser(newUser);

    setFirstName("");
    setLastName("");
    setUsername("");
    setPhone("");
  };

  return (
    <div className="user-form">
      <div className="title">
        <h1>Add New User</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
        />

        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone"
        />

        <Button outlined text="Add" type="submit" />
      </form>
    </div>
  );
}
