import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

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
      showAlert('dark mode turn on', 'success')
    } else {
      setMyMode('light')
      showAlert('light mode turn on', 'success')
    }
  }

  return (
    <>
      <Navbar title="Correct Title" mode={myMode} toggle={toggleChange} />
      <Alert alert={alert} />
      <div className="container my-3">

        <TextForm textFormHeading="Enter text" />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
