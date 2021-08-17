import "./App.css";
import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  const expenses = [
    { date: new Date(), title: "Car insurance", amount: 294.67 },
    { date: new Date(2021, 5, 3), title: "Toilet Paper", amount: 5.99 },
    { date: new Date(2021, 8, 2), title: "New TV", amount: 1399.99 },
    { date: new Date(2021, 10, 14), title: "New desk", amount: 499.00 },
  ];
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
