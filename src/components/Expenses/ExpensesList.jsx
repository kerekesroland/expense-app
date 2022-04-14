import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredArr }) => {
    if (filteredArr.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses to show</h2>;
    }
    return (
        <ul className="expenses-list">
            {filteredArr.map((expense) => (
                <ExpenseItem key={expense.date} expense={expense} />
            ))}
        </ul>
    );
};

export default ExpensesList;
