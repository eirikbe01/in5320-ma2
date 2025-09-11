

function Table(props) {

  const data = props.apiData.results
  console.log(data);

  if (!data) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {

    // Write your code here:
    return(
      <table>
        <tr>
          <th>Country</th>
          <th>Continent</th>
          <th>Population</th>
        </tr>
        {data.map((row) => {
          return (
            <tr>
              <td>{row.Country}</td>
              <td>{row.Continent}</td>
              <td>{row.Population}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Table;
