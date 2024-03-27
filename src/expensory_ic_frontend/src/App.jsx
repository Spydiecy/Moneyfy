import * as React from "react";

import logo from "../src/home/Assets/logo.png";
import robo from "../src/home/Assets/robo.png";
import "./App.css";
import { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";
import ExpenseChart from "./components/ExpenseChart";
import Papa from 'papaparse';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here if needed
    navigate('/RegisterLoginUser');
  };
  
  const [expenses, setExpenses] = useState([
    { name: 'Rent', amount: 500 },
    { name: 'Groceries', amount: 200 },
    { name: 'Shopping', amount: 300 },
    { name: 'Fuel', amount: 50 },
    { name: 'Entertainment', amount: 100 },
    // ...
  ]);
  
  const addExpense = (name, amount) => {
    setExpenses(prevExpenses => [...prevExpenses, { name, amount }]);
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(expenses);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const csvURL = window.URL.createObjectURL(csvData);
    let tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'expenses.csv');
    tempLink.click();
  };
  return (
    <AppProvider>
      <div class="logo-and-text">
        <img src={logo} alt="Logo" className="logo" />
        <h1 class="mt-3 font-weight-bold">Moneyfy</h1>
        <img src={robo} alt="robo" className="robo" />
        <div id="stars"></div>
      </div>
      <div className="container">
        <h3 className="web-txt">
          A platform to gain control over your financial activities and overcome your overspending habits.
        </h3>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <br />
        <div className="row mt-3 box2">
          <h3 style={{ color: "white", margin: "5px" }}>Add Expense</h3>
          <br></br>
          <div className="col-lg-8">
            <div
              className="card add-expense"
              style={{ backgroundColor: "#bbbbbb" }}
            >
              <AddExpenseForm />
            </div>
          </div>
          <div className="col-lg-4 chart-col">
            <div
              className="card expense-chart"
              style={{ backgroundColor: "#bbbbbb" }}
            >
              <ExpenseChart />
            </div>
          </div>
        </div>

        <h3
          className="mt-3"
          style={{ color: "black", margin: "0 20px 15px 0 " }}
        >
          Expenses
        </h3>
        <div className="row ">
          <div className="col-sm">
          <button onClick={exportToCSV}>Export to CSV</button>
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};



export default App;