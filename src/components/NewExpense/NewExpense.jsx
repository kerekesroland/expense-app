import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpense, expenses }) => {
    return (
        <div className="new-expense">
            <ExpenseForm expenses={expenses} addNewExpense={addNewExpense} />
        </div>
    );
};

export default NewExpense;
