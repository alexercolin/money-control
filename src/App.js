import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { date: new Date(), title: "Car insurance", amount: 294.67 },
    { date: new Date(2021, 5, 3), title: "Toilet Paper", amount: 5.99 },
    { date: new Date(2021, 8, 2), title: "New TV", amount: 1399.99 },
    { date: new Date(2021, 10, 14), title: "New desk", amount: 499.0 },
  ];
  return (
    <>
      <div></div>
      <div className="App">
        <h2>Let's get started</h2>
        <Expenses data={expenses} />
      </div>
    </>
  );
}

export default App;
