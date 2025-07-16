import { useEffect } from "react";
import "../UserTable/UserTable.css";
import Button from "@/Components/ui/Button/Button";

export default function UserTable({ users, deleteUser }) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Department</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>{u.department}</td>
              <td>{u.gender}</td>
              <td>
                <Button
                  type="button"
                  bgyellow
                  text="✘"
                  action={() => deleteUser(u.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
