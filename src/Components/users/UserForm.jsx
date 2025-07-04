import React from "react";
import "./users.css";
import Button from "../ui/Button/Button";

export default function UserForm() {
  return (
    <div className="user-form">
      <div className="title">
        <h1>Add New User</h1>
        <p></p>
      </div>
      <form action="#">
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" type="text" placeholder="Enter first name" />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" type="text" placeholder="Enter last name" />

        <label htmlFor="username">Username:</label>
        <input id="username" type="text" placeholder="Enter username" />

        <label htmlFor="phone">Phone:</label>
        <input id="phone" type="number" placeholder="Enter phone" />
        <Button outlined text="Add" />
      </form>
    </div>
  );
}
