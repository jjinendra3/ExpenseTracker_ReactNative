import { View } from "react-native";
import React, { useContext, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseContext from "../ContextAPI";

const RecentExpense = ({ navigation }) => {
  const expenseContext = useContext(ExpenseContext);
  useEffect(() => {
    expenseContext.setter();
  }, [navigation]);
  let sum = 0;
  const DUMMY = expenseContext.expenses;
  var datenoww = new Date();
  var datenow = new Date();
  var dateback = new Date(datenow.setDate(datenow.getDate() - 7));
  let exp = [];
  var dated;
  for (let i = 0; i < DUMMY.length; i++) {
    dated = new Date(DUMMY[i].date);
    if (dated >= dateback && dated <= datenoww) {
      sum += DUMMY[i].amount;
      exp.push(DUMMY[i]);
    }
  }
  return (
    <View>
      <ExpenseSummary expense={sum} duration={"Last 7 Days"} />
      <ExpenseList expense={exp} />
    </View>
  );
};

export default RecentExpense;
