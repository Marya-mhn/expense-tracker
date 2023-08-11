import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput.js/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expenseCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expenseCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7Daysago = getDateMinusDays(today, 7);

    return expense.date > date7Daysago;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registred for the last 7 days"
    />
  );
}

export default RecentExpenses;
