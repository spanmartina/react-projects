import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const containsItems = ctx.items.length > 0;

  const cartItemAdd = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemove = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemAdd.bind(null, item)}
      onRemove={cartItemRemove.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["card-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {containsItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
