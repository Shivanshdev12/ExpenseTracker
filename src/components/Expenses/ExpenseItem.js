import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    const el = document.getElementById(props.id);
    el.remove();
  };
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={title} />
      <button onClick={clickHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
