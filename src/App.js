import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  link
} from 'react-router-dom';

import "./App.css";

import PortfolioPage from "./components/PortfolioPage";


class App extends Component {
  render () {
  return (
    <div className="App">
      <Router>
       

        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          
          
          


        </Routes>

      </Router>
      
    </div>
  );
  }
}
  


export default App;