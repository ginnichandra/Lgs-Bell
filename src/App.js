import React, { useState, useEffect, useCallback } from "react";
import LoadingSpinner from "./UI/LoadingSpinner";
import "./App.css";
import DataList from "./components/DataList";

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);

      const loadedList = [];

      for (const key in data) {
        loadedList.push({
          id: data[key].id,
          title: data[key].title,
          body: data[key].body,
        });
      }
      setList(loadedList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <div className='App'>
      {isLoading && <LoadingSpinner />}
      {!isLoading && !error && <DataList list={list} />}
      {!isLoading && error && <p> {error}</p>}
    </div>
  );
}

export default App;
