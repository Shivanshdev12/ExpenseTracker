import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      {/* lowercase are predefined elements */}
      <h2>Let's get started!</h2>
      {/* Components with starting letter capital its user defined custom
      component */}
      <ExpenseItem />
    </div>
  );
}

export default App;
