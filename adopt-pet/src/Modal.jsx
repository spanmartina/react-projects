import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // children - the content of the modal
  //create a ref, used to keep track of the DOM element that represents the modal
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div"); //ensures that the reference always points to a valid DOM element
  }

  // when component mounts -> appends the modal's DOM element to a modal element
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    //cleanup function (removes the modal's DOM element when component is unmounted)
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
