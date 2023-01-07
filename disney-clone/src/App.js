import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Login from './components/Login';
import Footer from './components/Footer';
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
          <Route path="/" element={<Login />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
