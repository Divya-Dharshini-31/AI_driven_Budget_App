
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/budget/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Budget Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}: {item.amount}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
