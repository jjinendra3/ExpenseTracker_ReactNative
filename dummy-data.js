import { useState } from "react";
import ExpenseContext from "./ContextAPI";
const ExpenseState = ({ children }) => {
  const arr = [
    {
      id: 1,
      desc: "Transportation",
      amount: 15.75,
      date: "2023-07-15",
    },
    {
      id: 2,
      desc: "Coffee",
      amount: 3.5,
      date: "2023-06-01",
    },
    {
      id: 3,
      desc: "Groceries",
      amount: 52.3,
      date: "2023-06-05",
    },
    {
      id: 4,
      desc: "Dinner",
      amount: 35.8,
      date: "2023-06-10",
    },
    {
      id: 5,
      desc: "Movie tickets",
      amount: 25.0,
      date: "2023-06-15",
    },
    {
      id: 6,
      desc: "Shopping",
      amount: 78.99,
      date: "2023-06-25",
    },
    {
      id: 7,
      desc: "Lunch",
      amount: 12.5,
      date: "2023-07-01",
    },
    {
      id: 8,
      desc: "Transportation",
      amount: 15.75,
      date: "2023-07-08",
    },
    {
      id: 9,
      desc: "Transfer",
      amount: 45.75,
      date: "2023-07-14",
    },
  ];
  const [expenses, setexpenses] = useState(arr);
  const adder = () => {};
  const remover = (index) => {
    let arr = [];
    for (let i = 0; i < expenses.length; i++) {
      if (index !== expenses[i].id) {
        arr.push(expenses[i]);
      }
    }
    setexpenses(arr);
  };
  return (
    <ExpenseContext.Provider value={{ expenses, adder, remover }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseState;
