import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
