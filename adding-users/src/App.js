import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/AddUser/UsersList";
import Card from "./components/UI/Card";
import styled from "./components/AddUser/AddUsers.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = ({ username, age }) => {
    setUsers((preInput) => {
      return [
        ...preInput,
        {
          id: Math.random().toString(),
          username,
          age,
        },
      ];
    });
    console.log(users);
  };

  return (
    <>
      <AddUser onAddUsers={addUserHandler} />
      <Card className={styled.input}>
        {users.map((user) => (
          <UsersList username={user.username} age={user.age} key={user.id} />
        ))}
      </Card>
    </>
  );
}

export default App;
