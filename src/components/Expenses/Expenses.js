import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React ,{useState} from 'react'
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedDate,setSelectedDate]=useState('2022')
  const dropDownChange=(selectedYear)=>{
    console.log(selectedYear)
    setSelectedDate(selectedYear)
  }
const filteredExpenses=props.items.filter((item,index)=>{
  return item.date.getFullYear().toString() === selectedDate
})
  return (
    <div>
      
      <Card className="expenses">
      <ExpenseChart  filteredDataPoints={filteredExpenses} />
        <ExpensesFilter onDropDownFilterChange={dropDownChange} selected={selectedDate}/>
        {filteredExpenses.length === 0 ? (<p className="expense-item">No records found </p>) :(filteredExpenses.map((item,index)=>{
          return (
            <ExpenseItem
            key ={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
          );
        }))}
       

      </Card>
    </div>
  );
}

export default Expenses;
