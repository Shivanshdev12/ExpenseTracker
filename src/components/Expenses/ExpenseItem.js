import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const deleteHandler = () => {
  //   const el = document.getElementById(props.id);
  //   el.remove();
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={props.title} />
    </Card>
  );
}

export default ExpenseItem;
