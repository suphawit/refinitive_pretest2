import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [table, setTable] = useState([]);
  const [filter, setFilter] = useState("");
  const getTableData = async () => {
    const response = await fetch("https://api.publicapis.org/categories");
    const json = await response.json();
    setTable(json);
  };
  useEffect(() => {
    getTableData();
  }, []);
  // getTableData().then((data) => {
  // console.log(data);
  // });
  return (
    <div className="app">
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <table>
        {table
          .filter((row) => {
            if (filter)
              return (
                row.slice(0, filter.length).toLowerCase() ===
                filter.toLowerCase()
              );
            else return row;
          })
          .map((row) => (
            <tr>
              <td>{row}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default App;
