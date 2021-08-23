import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseYear = props.date.getFullYear();
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;
