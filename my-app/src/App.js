
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [myMode, setMyMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  const toggleChange = () => {
    if (myMode === 'light') {

      setMyMode('dark')
      showAlert('chế độ tối đã bật ! ', 'success')
      document.body.style.backgroundColor = 'black'
      document.title = 'Minh First React App - Dark Mode'
      
    } else {
      setMyMode('light')
      showAlert('chế độ sáng đã bật ! ', 'success')
      document.body.style.backgroundColor = 'white'
      document.title = 'Minh First React App - Light Mode'
    }
  }

  return (
    <Router>
      <Navbar title="Minh FE" mode={myMode} toggle={toggleChange} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={ <TextForm textFormHeading="Nhập chữ" mode={myMode} />}/>
          <Route exact path="/about" element={  <About mode={myMode}/>}/>
        </Routes>
      
      </div>
      </Router>
    
  );
}

export default App;
