import React from "react";
import { Route, Routes } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.scss";
//import { NavigatieView } from "./50-views/navigatie/NavigatieView";
import { HomeView } from "./views/homeview/HomeView";
import { Navigatie } from "./components/navigatie/Navigatie";

function App() {
  return (
    <div className="App">
      <Navigatie />
      <Routes>
        <Route element={<HomeView />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
