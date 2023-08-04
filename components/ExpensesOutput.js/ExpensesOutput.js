import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_Expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_Expenses} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
