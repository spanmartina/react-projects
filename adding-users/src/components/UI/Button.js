import styled from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styled.button}
      type={props.type || "button"}
    >
      {props.textButton}
    </button>
  );
}
