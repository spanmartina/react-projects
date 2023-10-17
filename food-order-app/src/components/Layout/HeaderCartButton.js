import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfCartItems = items.reduce((curretNumber, item) => {
    return curretNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""} `;

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
