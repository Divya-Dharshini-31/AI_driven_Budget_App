import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

const Transactions = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/expense/`)
            .then(response => setExpenses(response.data))
            .catch(error => console.error("Error fetching expenses:", error));
    }, []);

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense.category}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
