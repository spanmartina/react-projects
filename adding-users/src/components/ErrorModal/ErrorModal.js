import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "./ErrorModal.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={styled.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ title, message, onClose }) => {
  return (
    <Card className={styled.modal}>
      <header className={styled.header}>
        <h2 className={styled.h2}>{title}</h2>
      </header>

      <div className={styled.content}>
        <p>{message}</p>
      </div>

      <footer className={styled.actions}>
        <Button onClick={onClose} textButton="Okay" />
      </footer>
    </Card>
  );
};

const ErrorModal = ({ message, title, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onClose={onClose} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
