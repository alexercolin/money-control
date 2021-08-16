import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();

  return (
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
        </div>
        <div className="expense-item__price">R$294.67</div>
      </div>
  );
}

export default ExpenseItem;
