import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    id: Math.random().toString(),
    title: "",
    amount: "",
    date: "",
  });
  const [toggle, setToggle] = useState(false);
  let dateHolder = userInput.date;
  const titleHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: +e.target.value };
    });
  };
  const dateHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    props.onNewData(userInput);

    setUserInput({
      id: Math.random().toString(),
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <Card>
      {toggle ? (
        <form className="hold" onSubmit={submitHandler}>
          <label>
            Name:&nbsp;
            <input
              type="text"
              name="name"
              value={userInput.title}
              required
              onChange={titleHandler}
            />
          </label>
          <label>
            Amount:&nbsp;
            <input
              type="number"
              step="0.01"
              name="amount"
              value={userInput.amount}
              required
              onChange={amountHandler}
            />
          </label>
          <label>
            Date:&nbsp;
            <input
              type="date"
              name="date"
              min="2020-01-01"
              max="2023-12-04"
              value={dateHolder ? dateHolder.toISOString().slice(0, 10) : ""}
              required
              onChange={dateHandler}
            />
          </label>
          <button
            className="submit"
            type="submit"
            onClick={() => {
              userInput.title && userInput.amount && userInput.date ? setToggle(true) : setToggle(false);
            }}
          >
            Add Expense
          </button>
        </form>
      ) : (
        <button
          className="submit2"
          type="submit"
          onClick={() => {
            setToggle(true);
          }}
        >
          Add Expense
        </button>
      )}
    </Card>
  );
};

export default ExpenseForm;
