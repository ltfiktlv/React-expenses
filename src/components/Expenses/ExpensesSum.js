import React from "react";

const ExpensesSum = ({ sum }) => {
  return (
    <p style={{ color: "white", textAlign: "center " }}>
      Sum of Expenses: {sum}
    </p>
  );
};

export default ExpensesSum;
