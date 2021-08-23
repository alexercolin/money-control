import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const items = props.data;
  return (
    <Card className="expenses">
      {items.map((index, i) => (
        <ExpenseItem
          date={index.date}
          title={index.title}
          amount={index.amount}
          key={i}
        />
      ))}
    </Card>
  );
};

export default Expenses;
