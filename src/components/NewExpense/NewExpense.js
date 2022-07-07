import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpsense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpsense,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
