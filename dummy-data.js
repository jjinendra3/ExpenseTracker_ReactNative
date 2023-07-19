import { useState } from "react";
import ExpenseContext from "./ContextAPI";
import axios from "axios";
const url=''//firebase api realtime database link goes here
const ExpenseState = ({ children }) => {
  const arr = [];
  const [expenses, setexpenses] = useState(arr);
  const setter=async()=>{
    console.log('setter');
    let expense=[];
    const response=await axios.get(url+'/expenses.json');
    for(const key in response.data){
        const obj={
            id:key,
            desc:response.data[key].desc,
            amount:response.data[key].amount,
            date:response.data[key].date
        }
        expense.push(obj);
    }
    setexpenses(expense);
  }
  const adder = (desc, amount,datestr) => {
    const data={
      desc:desc,
      amount:amount,
      date:datestr
    }
    axios.post(url+'/expenses.json',data)
    setter();
  };
  const remover = async(index) => {
    await axios.delete(url+'/expenses/'+index+'.json');
    setter();
  };
  const updater = async(desc, amount, index, date) => {
    await axios.put(url+'/expenses/'+index+'.json',{
          desc: desc,
          amount: amount,
          date: date,
        });
        setter();
  };
  return (
    <ExpenseContext.Provider value={{ expenses,setter, adder, remover, updater }}>
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseState;