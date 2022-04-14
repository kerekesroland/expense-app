import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_DATA = [
    {
        id: 1,
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 2,
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 3,
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 4,
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const addNewExpense = (expense) => {
        setExpenses((prevState) => [...prevState, expense]);
    };

    return (
        <>
            <NewExpense expenses={expenses} addNewExpense={addNewExpense} />
            <Expenses expenses={expenses} />
        </>
    );
};

export default App;
