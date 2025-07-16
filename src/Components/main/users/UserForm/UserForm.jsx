import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../UserForm/UserForm.css";
import Button from "@/Components/ui/Button/Button";
import UserTable from "../UserTable/UserTable";

export default function UserForm() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const data = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    return data;
  }

  useEffect(() => {
    const bootstrapAsync = async () => {
      const data = await fetchUsers();
      setUsers(data.users);
    };
    bootstrapAsync();
  }, []);

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      gender: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      department: Yup.string().required("Required"),
      gender: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newUser = {
        id: Date.now(),
        ...values,
      };
      setUsers([...users, newUser]);
      resetForm();
    },
  });

  return (
    <div className="container user-container">
      <div className="left">
        <h2>Add New User</h2>
        <form onSubmit={formik.handleSubmit}>
          {["firstName", "lastName", "department", "email"].map((field) => (
            <div className="box" key={field}>
              <label>{`Enter ${
                field[0].toUpperCase() + field.slice(1)
              }`}</label>
              <input
                name={field}
                value={formik.values[field]}
                onChange={formik.handleChange}
              />
              {formik.errors[field] && formik.touched[field] && (
                <div className="error">{formik.errors[field]}</div>
              )}
            </div>
          ))}

          <div className="box box-gender">
            <h4>Choose gender</h4>
            <div className="gender">
              {["female", "male"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formik.values.gender === g}
                    onChange={formik.handleChange}
                  />
                  <span>{g[0].toUpperCase() + g.slice(1)}</span>
                </label>
              ))}
              {formik.errors.gender && formik.touched.gender && (
                <div className="error">{formik.errors.gender}</div>
              )}
            </div>
          </div>

          <Button type="submit" text="Add" bgcolor />
        </form>
      </div>

      <div className="right">
        <h2>Users</h2>
        <UserTable users={users} deleteUser={deleteUser} />
      </div>
    </div>
  );
}
