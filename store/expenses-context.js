import { createContext, useReducer } from "react";

export const ExpensesContext = cretaeContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
    case "UPDATE":
    case "DELETE":
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function dleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
