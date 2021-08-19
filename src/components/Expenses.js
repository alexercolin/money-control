import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const items = props.data;
  return (
    <>
      {items.map((index) => (
          <ExpenseItem
            date={index.date}
            title={index.title}
            amount={index.amount}
          />
      ))}
    </>
  );
}

export default Expenses;
