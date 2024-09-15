import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((i) => i.amount);

  const income = amounts
    .filter((i) => i > 0)
    .reduce((acc, cur) => (acc += cur), 0)
    .toFixed(2);
  const expenses = amounts
    .filter((i) => i < 0)
    .reduce((acc, cur) => (acc += cur), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expenses)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
