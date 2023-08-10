import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-tracker-f8799-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
