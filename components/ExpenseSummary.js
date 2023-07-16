import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ExpenseSummary = ({ expense, duration }) => {
  return (
    <View style={styles.summary}>
      <Text style={styles.text}>{duration}</Text>
      <Text style={[styles.text, { fontSize: 24 }]}>₹{expense.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;
const styles = StyleSheet.create({
  summary: {
    padding: 10,
    backgroundColor: "#19A7CE",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    margin: 10,
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#D4E2D4",
  },
});
