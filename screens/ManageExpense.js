import { View, StyleSheet } from "react-native";
import React, { useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import ExpenseContext from "../ContextAPI";
const ManageExpense = ({ route, navigation }) => {
  const expenseContext = useContext(ExpenseContext);
  useEffect(() => {
    navigation.setOptions({
      title: route.params.id ? "Add Expense" : "Edit Expense",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Ionicons
        name="trash"
        style={{
          fontSize: 24,
          color: "#F45050",
          fontWeight: "bold",
          marginLeft: 10,
          paddingTop: 10,
        }}
        onPress={() => {
          expenseContext.remover(route.params.index);
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#146C94",
  },
});
