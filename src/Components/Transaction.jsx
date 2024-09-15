import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ item }) => {
  const { deleteTsx } = useContext(GlobalContext);

  const sign = item.amount < 0 ? "-" : "+";

  return (
    <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}{" "}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => {
          console.log("reachjed");
          deleteTsx(item.id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
