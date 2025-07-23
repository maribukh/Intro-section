import { useState } from "react";
import "../UserForm/UserForm.css";
import Button from "@/Components/ui/Button/Button";
import UserTable from "../UserTable/UserTable";
import { Formik } from "formik";

export default function UserForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    gender: "",
  });

  const [users, setUsers] = useState([]);

  function addUser(e) {
    e.preventDefault();

    const { firstName, lastName, email, department, gender } = form;

    if (!firstName || !lastName || !email || !department || !gender) {
      alert("Please, fill all information!");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...form,
    };

    setUsers([...users, newUser]);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      gender: "",
    });
  }

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  

  return (
    <div className="container user-container">
      <div className="left">
        <h2>Add New User</h2>
        <Formik
    initialValues={{
      name: "",
      lastname: " ",
      department: " ",
      email: " ",
      gender: " ",
    }}
    validate={(values) => {
      const errors = {};
      if (
        !values.name &&
        !values.lastname &&
        !values.department &&
        !values.email &&
        !values.gender
      ) {
        errors.name = "Required";
        errors.lastName = "Required";
        errors.department = "Required";
        errors.email = "Required";
        errors.gender = "Required";
      }
      return errors;
    }}   >     ({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => ( <form onSubmit={handleS}>
          <div className="box">
            <label>Enter Name</label>
            <input
              value={form.firstName}
              type="text"
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className="box">
            <label>Enter Lastname</label>
            <input
              value={form.lastName}
              type="text"
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
          <div className="box">
            <label>Enter Department</label>
            <input
              value={form.department}
              type="text"
              onChange={(e) => setForm({ ...form, department: e.target.value })}
            />
          </div>
          <div className="box">
            <label>Enter Email</label>
            <input
              value={form.email}
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="box box-gender">
            <h4>Choose gender</h4>
            <div className="gender">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
                <span>Female</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
                <span>Male</span>
              </label>
            </div>
          </div>

          <Button type="submit" text="Add" bgcolor />
        </form>)
  </Formik>;
      </div>
      <div className="right">
        <h2>Users</h2>
        <UserTable users={users} deleteUser={deleteUser} />
      </div>
    </div>
  );
}
