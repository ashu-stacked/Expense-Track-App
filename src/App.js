import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React ,{useState} from 'react'
const DUMMY_EXPENSES = [
  { title: "Clothing", amount: 2000, date: new Date(2021, 12, 7) },
  { title: "Weaponry", amount: 5000, date: new Date(2021, 11, 7) },
  { title: "Bike", amount: 12000, date: new Date(2021, 10, 7) },
  { title: "Accessories", amount: 6000, date: new Date(2021, 9, 7) },
];
function App() {
const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler=(expenseData)=>{
   setExpenses((prevState)=>{
        return [expenseData,...prevState]
   })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;













