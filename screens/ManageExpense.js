import { View, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import ExpenseContext from "../ContextAPI";
import { Text } from "react-native";
import { Alert } from "react-native";
const ManageExpense = ({ route, navigation }) => {
  const expenseContext = useContext(ExpenseContext);
  const { desc, amount, id, index, date } = route.params;
  let amou;
  if (amount != null) {
    amou = amount.toString();
  }
  const [desca, setdesc] = useState(desc);
  const [amo, setamo] = useState(amou);
  useEffect(() => {
    navigation.setOptions({
      title: id ? "Add Expense" : "Edit Expense",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <TextInput
        value={desca}
        style={styles.desc}
        onChangeText={setdesc}
        placeholder="Description"
      />
      <TextInput
        value={amo}
        onChangeText={setamo}
        placeholder="Amount"
        keyboardType="numeric"
        style={[styles.desc, { width: "30%" }]}
      />
      <View style={styles.buttons}>
        {!id && (
          <>
            <Pressable
              onPress={() => {
                expenseContext.remover(index);
                navigation.goBack();
              }}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Text style={styles.btn}>Delete Expense</Text>
            </Pressable>
          </>
        )}
        <Pressable
          onPress={
            id
              ? () => {
                  const num = parseInt(amo);
                  if (isNaN(amo) || num <= 0) {
                    Alert.alert(
                      "Invalid Number!",
                      "Please enter a valid number!"
                    );
                    return;
                  }
                  expenseContext.adder(desca, num);
                  setdesc("");
                  setamo("");
                  navigation.goBack();
                }
              : () => {
                  const num = parseInt(amo);
                  if (isNaN(amo) || num <= 0) {
                    Alert.alert(
                      "Invalid Number!",
                      "Please enter a valid number!"
                    );
                    return;
                  }
                  expenseContext.updater(desca, num, index, date);
                  setdesc("");
                  setamo("");
                  navigation.goBack();
                }
          }
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Text style={[styles.btn, { color: "blue" }]}>
            {!id ? "Make Changes" : "Add Expense"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#146C94",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    borderWidth: 1,
    borderColor: "#D4E2D4",
    width: "80%",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    fontSize: 20,
    color: "#146C94",
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "#D2E9E9",
    textAlign: "center",
    padding: 5,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
  },
  btn: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#F24C3D",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#E3F4F4",
    marginHorizontal: 5,
  },
  pressed: {
    opacity: 0.75,
  },
});
{
  /* <Ionicons
        name="trash" style={{
          fontSize: 24,
          color: "#F45050",
          fontWeight: "bold",
          marginLeft: 10,
          paddingTop: 10,
        }} onPress={() => {
          
        }} /> */
}
