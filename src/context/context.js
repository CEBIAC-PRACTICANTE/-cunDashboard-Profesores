import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("subjects")) || [];

export const DashCunContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [subjects, dispatch] = useReducer(contextReducer, initialState);

  const deleteSubject = (id) => {
    dispatch({ type: "DELETE_SUBJECT", payload: id });
  };

  const addSubject = (subject) => {
    dispatch({ type: "ADD_SUBJECT", payload: subject });
  };

  const balance = subjects.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc + currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <DashCunContext.Provider
      value={{ deleteSubject, addSubject, subjects, balance }}
    >
      {children}
    </DashCunContext.Provider>
  );
};
