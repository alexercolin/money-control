import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpenseChart from "./components/ExpensesChart/ExpenseChart";

const DUMMY_EXPENSES = [
  { id: "e1", date: new Date(), title: "Car insurance", amount: 294.67 },
  {
    id: "e2",
    date: new Date(2020, 5, 3),
    title: "Toilet Paper",
    amount: 5.99,
  },
  { id: "e3", date: new Date(2019, 8, 2), title: "New TV", amount: 1399.99 },
  {
    id: "e4",
    date: new Date(2021, 10, 14),
    title: "New desk",
    amount: 499.0,
  },
];

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
        <ExpenseChart />
        <Expenses data={expenses} />
      </div>
    </>
  );
};

export default App;
