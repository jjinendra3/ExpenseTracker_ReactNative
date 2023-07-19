import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
const ExpenseList = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 5, marginBottom: 150 }}>
      <FlatList
        data={props.expense.reverse()}
        renderItem={(element) => {
          return (
            <Pressable
              key={element.index}
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
                navigation.navigate("ManageExpense", {
                  desc: element.item.desc,
                  date: element.item.date,
                  amount: element.item.amount,
                  index: element.item.id,
                  id: 0,
                });
              }}
            >
              <View style={styles.items}>
                <View style={styles.info}>
                  <Text style={styles.desc}>{element.item.desc}</Text>
                  <Text style={styles.date}>{element.item.date}</Text>
                </View>
                <Text style={styles.amount}>₹{element.item.amount}</Text>
              </View>
            </Pressable>
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
    elevation: 2,
    overflow: "hidden",
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
  pressed: {
    opacity: 0.75,
  },
});
