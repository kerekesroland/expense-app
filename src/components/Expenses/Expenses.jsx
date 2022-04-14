import React from "react";
import { Card } from "../UI/Card";
import "../Expenses/Expenses.css";
import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import "../NewExpense/ExpenseFilter.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
    const [filterDate, setFilterDate] = useState();

    const filterExpenses = (selectDate) => {
        setFilterDate(selectDate);
    };

    const filteredArr = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filterDate
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    filterDate={filterDate}
                    filterExpenses={filterExpenses}
                />
                <ExpensesChart filteredArr={filteredArr} />
                <ExpensesList filteredArr={filteredArr} />
            </Card>
        </div>
    );
};

export default Expenses;
