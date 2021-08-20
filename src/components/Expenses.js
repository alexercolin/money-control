import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import "./Expenses.css";

function Expenses(props) {
  const items = props.data;
  return (
      <Card className="expenses">
        {items.map((index) => (
          <ExpenseItem
            date={index.date}
            title={index.title}
            amount={index.amount}
          />
        ))}
      </Card>
  );
}

export default Expenses;
