import React, { useContext } from "react";
import { UserContext } from "../context/context";
import "../styles/User.css"; 

const UserList = () => {
  const { state } = useContext(UserContext);
  const { users } = state;

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Registered Users</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-list-item">
            <span className="user-email">{user.email}</span> -
            <span className="user-age"> Age: {user.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
