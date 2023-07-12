import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Data from "./data/Data";
import ExpenseForm from "./components/Expenses/ExpenseForm";

const App = () => {
  const [data, setData] = useState(Data);
  const [filteredData, setFilteredData] = useState(data);

  const addNewExpense = (item) => {
    setData((prevExpenses) => {
      return [...prevExpenses, item];
    });
    setFilteredData(() => {
      return [...data, item];
    });
  };

  const filteredExpenses = (selectedYear) => {
    if (selectedYear.startsWith("all")) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((expense) => {
          return expense.date.getFullYear().toString() === selectedYear;
        })
      );
    }
  };

  const deleteHandler = (id) => {
    setFilteredData(
      filteredData.filter((el) => {
        return el.id !== id;
      })
    );
  };

  return (
    <div>
      <Expenses
        expenses={filteredData}
        onFilterChange={filteredExpenses}
        deleteHandler={deleteHandler}
      />
      <ExpenseForm onNewData={addNewExpense} />
    </div>
  );
};

export default App;
