import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      {/* <h4>{props.locationOfExpenditure}</h4> */}
      <ExpenseDetails amount={props.amount} title={props.title} />
    </div>
  );
}

export default ExpenseItem;
