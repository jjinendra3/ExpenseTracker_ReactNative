import { View } from "react-native";
import React, { useContext } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseContext from "../ContextAPI";
const AllExpense = () => {
  let sum = 0;
  const expenseContext = useContext(ExpenseContext);
  const DUMMY = expenseContext.expenses;
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
