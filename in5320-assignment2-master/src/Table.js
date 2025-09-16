import './App.css';
import { useState, useMemo } from "react";
function Table(props) {

  const data = props.apiData.results
  console.log(data);

  const [sorting, setSorting] = useState({
    column: null,
    direction: "asc",
  });

  function handleSort(column) {
    if (sorting.column === column) {
      setSorting((prev) => ({
        column,
        direction: prev.direction === "asc" ? "desc" : "asc",
      }));
    } else {
      setSorting({ column, direction: "asc"})
    }
  };

  const sortedData = useMemo(() => {
    if (!sorting.column) return data;
    
    return [...data].sort((a, b) => {
      const valA = a[sorting.column];
      const valB = b[sorting.column];
      

      if (typeof(valA) === "string" && typeof(valB) === "string") {
        return sorting.direction === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      else {
        return sorting.direction === "asc" ? valA - valB : valB - valA
      }
    });
  }, [data, sorting]);

  if (!sortedData) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {

    // Write your code here:
    return(
      <table>
        <thead>
          <tr>
            <th className="columnHeaders" onClick={() => handleSort("Country")}>Country {sorting.column === "country" ? (sorting.direction === "asc" ? "↑" : "↓") : ""}</th>
            <th className="columnHeaders" onClick={() => handleSort("Continent")}>Continent</th>
            <th className="columnHeaders" onClick={() => handleSort("Population")}>Population</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.Country}</td>
                <td>{row.Continent}</td>
                <td>{row.Population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
