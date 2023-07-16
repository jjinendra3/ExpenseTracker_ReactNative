import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
const ExpenseList = (props) => {
  return (
    <View style={{ padding: 5, marginBottom: 150 }}>
      <FlatList
        data={props.expense}
        renderItem={(element) => {
          return (
            <View key={element.index} style={styles.items}>
              <View style={styles.info}>
                <Text style={styles.desc}>{element.item.desc}</Text>
                <Text style={styles.date}>{element.item.date}</Text>
              </View>
              <Text style={styles.amount}>₹{element.item.amount}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ExpenseList;
const styles = StyleSheet.create({
  items: {
    padding: 10,
    backgroundColor: "#19A7CE",
    borderRadius: 10,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  desc: {
    fontSize: 16,
    color: "#D4E2D4",
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#D4E2D4",
  },
  amount: {
    fontSize: 18,
    color: "#19A7CE",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
