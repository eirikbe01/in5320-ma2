import './App.css';
import { useState, useMemo } from "react";
function Table(props) {

  const data = props.apiData.results
  console.log(data);
  console.log(props.apiData);

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
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="countryColumn" onClick={() => handleSort("Country")}>Country {sorting.column === "country" ? (sorting.direction === "asc" ? "↑" : "↓") : ""}</th>
              <th className="otherColumns" onClick={() => handleSort("Continent")}>Continent</th>
              <th className="otherColumns" onClick={() => handleSort("Population")}>Population</th>
              <th className="otherColumns" onClick={() => handleSort("Population")}>Population Growth</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td className="countryColumn">{row.Country}</td>
                  <td className="otherColumns">{row.Continent}</td>
                  <td className="otherColumns">{row.Population}</td>
                  <td className="otherColumns">{row.PopulationGrowth}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
