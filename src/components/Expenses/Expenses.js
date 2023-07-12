import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesSum from "./ExpensesSum";
const Expenses = ({ expenses, onFilterChange, deleteHandler }) => {
  const filterChangeHandler = (selectedYear) => {
    onFilterChange(selectedYear);
  };

  let amountHolder = 0;
  expenses.map((el) => (amountHolder += el.amount));

  return (
    <Card>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {expenses.length !== 0 ? (
        <>
          <ExpensesChart expenses={expenses} />
          <ExpensesSum sum={amountHolder} />
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              deleteHandler={deleteHandler}
            />
          ))}
        </>
      ) : (
        <>
          <p style={{ color: "white", textAlign: "center" }}>
            There is no item in the list!
          </p>
        </>
      )}
    </Card>
  );
};

export default Expenses;
