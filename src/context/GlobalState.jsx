import React, { useReducer, createContext, useContext } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Acttions - calls reducer

  function deleteTsx(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTsx(tsx) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: tsx,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTsx, addTsx }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
