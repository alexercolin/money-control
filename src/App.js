import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpenseChart from "./components/ExpensesChart/ExpenseChart";
import DUMMY_EXPENSES from "./shared/constants/dummyData";

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpensesInput = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...expenses];
    });
  };

  return (
    <>
      <div></div>
      <div className="App">
        <NewExpenses onAddExpenses={newExpensesInput} />
        <Expenses data={expenses} />
        <ExpenseChart data={expenses} />
      </div>
    </>
  );
};

export default App;
