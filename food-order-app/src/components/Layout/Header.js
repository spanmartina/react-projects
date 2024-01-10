import React, { useState } from "react";
import headerImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const [isModalOpen, setIsModal] = useState(false);

  return (
    <>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImg} alt="header img" />
      </div>
    </>
  );
};

export default Header;
