import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';

const url = 'https://api.github.com/users'

const Item = ()=> {
  return (
    <h1>Item</h1>
  )
}

function App() {
  const [show,setShow]=useState(false)
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  },[])
  return (
    <>
   <div className="main">
        <h1>fetch data</h1>
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <Item/>}
   </div>
    </>
  );
}

export default App;
