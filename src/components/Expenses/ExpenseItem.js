import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ id, title, amount, date, deleteHandler }) => {
  return (
    <div className="expense-item ">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3 className="expense-item__price ">${amount}</h3>
        <button
          className="expense-item__price "
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteHandler(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
