import logo from './logo.svg';
import './App.css';
import {data} from './data'
import React from 'react'



function App() {
  const [people,setPeople]=React.useState(data)
  const [btnName,setBtnName]=React.useState('Xóa')
  const remove = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }

  return (
   <>
   {
    people.map((person)=>{
      const { id, name } = person
     return (
       <div key={id} className="item">
        <h1>{name}</h1>
         <button onClick={() => remove(id)}>remove</button>
       </div>
     ) 
    })
   }
   <button onClick={()=>setPeople([])}>Xóa</button>
   </>
  );
}

export default App;
