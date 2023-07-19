import { View } from "react-native";
import React, { useContext, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseContext from "../ContextAPI";
const AllExpense = ({ navigation }) => {
  const expenseContext = useContext(ExpenseContext);
  useEffect(() => {
    expenseContext.setter();
  }, [navigation]);
  let sum = 0;
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
