import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const items = props.data;
  return (
      <div className="expenses">
        {items.map((index) => (
          <ExpenseItem
            date={index.date}
            title={index.title}
            amount={index.amount}
          />
        ))}
      </div>
  );
}

export default Expenses;
