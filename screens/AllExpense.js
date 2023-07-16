import { View } from "react-native";
import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
const AllExpense = ({ route }) => {
  let sum = 0;
  const { DUMMY } = route.params;
  for (let i = 0; i < DUMMY.length; i++) {
    sum += DUMMY[i].amount;
  }
  return (
    <View>
      <ExpenseSummary expense={sum} duration={"Total Expenses"} />
      <ExpenseList expense={DUMMY} />
    </View>
  );
};

export default AllExpense;
