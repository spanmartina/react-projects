import React from "react";
import styled from "./UsersList.module.css";

const UsersList = ({ username, age, id }) => {
  return (
    <ul className={styled["ul-users"]}>
      <li className={styled["user-card"]} key={id}>
        {username} ({age} years old)
        {/* {console.log({ props })} */}
      </li>
    </ul>
  );
};

export default UsersList;
