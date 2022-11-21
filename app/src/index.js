import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL254_SR254,254_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'by Amelia Hepworth'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL254_SR254,254_.jpg',
    title: 'I Love You to the Moon and Back ',
    author: 'by Amelia Hepworth'
  }
]

function App() {

  return (
  <section className='section'>
    {books.map((book)=>{
      return <Book {...book}></Book>
    })}
    
  </section>
  )}

  const Book = ({img,title,author}) =>{
  
    return (
    <article className='book'>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <h6>{author}</h6>
    </article>
    )}
ReactDOM.render(<App />, document.getElementById('root'))
