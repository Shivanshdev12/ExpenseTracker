import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        finalYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
