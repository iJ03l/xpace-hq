import "./App.css";
import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <BrowserRouter className="app">
      {loading ? (
        <div id="app-loader">
          <PacmanLoader
            color={"green"}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

        </div>
      ) : (
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
