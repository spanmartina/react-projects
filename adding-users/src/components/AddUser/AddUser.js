import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styled from "./AddUsers.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        message: "Please enter a valid name and age (non-empty values).",
        title: "Invalid input",
      });
    } else if (+age < 0) {
      setError({
        message: "Please enter a valid age (> 0)",
        title: "Invalid age",
      });
      return;
    }
    props.onAddUsers({ username, age });
    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          message={error.message}
          title={error.title}
          onClose={errorHandler}
        />
      )}
      <Card className={styled.input}>
        <form onSubmit={submitHandler}>
          <div className={styled.input}>
            <label htmlFor="username" className={styled.label}>
              Username
            </label>

            <input
              className={styled.input}
              id="username"
              type="text"
              ref={usernameRef}
            />

            <label htmlFor="age" className={styled.label}>
              Age
            </label>
            <input
              className={styled.input}
              id="age"
              type="number"
              ref={ageRef}
            />

            <Button textButton="Add User" type="submit" />
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
