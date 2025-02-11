import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

const Dashboard = () => {
    const [budget, setBudget] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/budget/`)
            .then(response => setBudget(response.data))
            .catch(error => console.error("Error fetching budget:", error));
    }, []);

    return (
        <div>
            <h2>Budget Overview</h2>
            <ul>
                {budget.map((item, index) => (
                    <li key={index}>{item.name}: ${item.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
