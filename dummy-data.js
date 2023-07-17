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
  const [ider, setider] = useState(10);
  const adder = (desc, amount) => {
    let date = new Date();
    let datestr = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    setexpenses([
      ...expenses,
      {
        desc: desc,
        amount: amount,
        id: ider,
        date: datestr,
      },
    ]);
    setider(ider + 1);
  };
  const remover = (index) => {
    let arr = [];
    for (let i = 0; i < expenses.length; i++) {
      if (index !== expenses[i].id) {
        arr.push(expenses[i]);
      }
    }
    setexpenses(arr);
  };
  const updater = (desc, amount, index, date) => {
    let arr = [...expenses];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === index) {
        arr[i] = {
          desc: desc,
          amount: amount,
          id: index,
          date: date,
        };
      }
    }
    setexpenses(arr);
  };
  return (
    <ExpenseContext.Provider value={{ expenses, adder, remover, updater }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseState;
