import React from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from "./Components/Search"


function App() {
  return (
    <>
    <Search />
    </>
  );
};

export default App;
