import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
   <>
    <Navbar title="Correct Title"/>
    <div className="container my-3">
      
    {/* <TextForm textFormHeading="Enter text"/> */}
    <About/>
    </div>
   
   </>
  );
}

export default App;
