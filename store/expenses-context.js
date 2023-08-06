import { createContext, useReducer } from "react";

const DUMMY_Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 9.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e3",
    description: "Some bananas ",
    amount: 79.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e4",
    description: "Another book ",
    amount: 18.99,
    date: new Date("2021-09-20"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 9.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e7",
    description: "Some bananas ",
    amount: 79.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e8",
    description: "Another book ",
    amount: 18.99,
    date: new Date("2021-09-20"),
  },
  {
    id: "e9",
    description: "Another book ",
    amount: 18.99,
    date: new Date("2021-09-20"),
  },
];

export const ExpensesContext = cretaeContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_Expenses);

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
