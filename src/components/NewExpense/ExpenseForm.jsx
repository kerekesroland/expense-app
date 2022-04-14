import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ addNewExpense, expenses }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [toggleNewExpense, setToggleNewExpense] = useState(false);
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const handleToggle = () => {
        setToggleNewExpense(!toggleNewExpense);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id: expenses[expenses.length - 1].id + 1,
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        addNewExpense(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        handleToggle();
    };

    return (
        <div>
            {toggleNewExpense ? (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input
                                type="text"
                                value={enteredTitle}
                                onChange={titleChangeHandler}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                value={enteredAmount}
                                onChange={amountChangeHandler}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2019-01-01"
                                max="2022-12-31"
                                value={enteredDate}
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={handleToggle}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            ) : (
                <div className="text-center">
                    <button onClick={handleToggle}>Add Expense</button>
                </div>
            )}
        </div>
    );
};

export default ExpenseForm;
