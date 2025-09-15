import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import Search from './Search.js';
import PageSize from './PageSize.js';

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Norway"); // Default = No search query
  const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
  const [pageSize, setPageSize] = useState(10);


  const handleSearch = (query) => {
    const search = query.trim();
    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery("");
    }
  }

  useEffect(() => {
    // All parameters are appended to this URL.
    let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery.trim();
    }

    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber + "&pageSize=" + pageSize;
    console.log("Page size set to: " + pageSize);
    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
      })
      .catch((err) => console.log(`Failed with: ${err}`));
  }, [searchQuery, pageNumber, pageSize]); // Array containing which state changes that should re-reun useEffect()

  return (
    <div className="App">
      <h1>Country lookup</h1>
      <Search value={searchQuery} onSearch={handleSearch}/>
      <PageSize onPageSizeChange={setPageSize}/>
      <Table apiData={apiData} />
    </div>
  );
}

export default App;
