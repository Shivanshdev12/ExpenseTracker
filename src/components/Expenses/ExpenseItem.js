import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);
  // const deleteHandler = () => {
  //   const el = document.getElementById(props.id);
  //   el.remove();
  // };
  const clickHandler = () => {
    setTitle("Changed");
    console.log(title);
  };
  const changeExpense = () => {
    setExpense(100);
    console.log("Changed!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={expense} title={title} />
      <button onClick={clickHandler}>Change</button>
      <button onClick={changeExpense}>Expense</button>
    </Card>
  );
}

export default ExpenseItem;
