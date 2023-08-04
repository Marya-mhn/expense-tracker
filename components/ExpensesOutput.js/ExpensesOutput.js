import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e1",
    description: "A pair of trousers",
    amount: 9.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e1",
    description: "Some bananas ",
    amount: 79.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e1",
    description: "Another book ",
    amount: 18.99,
    date: new Date("2021-09-20"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_Expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_Expenses} />
    </View>
  );
}

export default ExpensesOutput;
