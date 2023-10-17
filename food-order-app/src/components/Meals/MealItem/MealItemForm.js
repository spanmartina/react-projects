import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNb = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNb < 1 ||
      enteredAmountNb > 11
    ) {
      setIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNb);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1-10).</p>}
    </form>
  );
};

export default MealItemForm;
