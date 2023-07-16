import { View } from "react-native";
import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
const RecentExpense = ({ route }) => {
  let sum = 0;
  const { DUMMY } = route.params;
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
