import React from "react";
import { Bar } from "react-chartjs-2";
import "./ExpenseChart.css";

const ExpenseChart = (props) => {
  const { data } = props;

  const amountCollection = data.map((index) => index.amount);

  return (
    <>
      <div className="expense-chart">
        <Bar
        
          data={{
            labels: [
              "Jan",
              "Fev",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dez",
            ],
            datasets: [
              {
                label: "# of expenses",
                data: amountCollection,
                backgroundColor: ["#7302a3"],
                borderColor: ["#7302a3"],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: [
                {
                  beginAtZero: true,
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default ExpenseChart;
