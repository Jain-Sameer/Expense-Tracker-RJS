import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((i) => i.amount);
  const total = amounts.reduce((acc, cur) => (acc += cur), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
