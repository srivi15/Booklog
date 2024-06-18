import {useState} from 'react';
import './App.css';
import bookData from './data';
import Header from './components/Header';
import Books from './components/Books';

function App() {
  const [books,setBooks]=useState(bookData);
  console.log(books);
  return (
    <div className='app'>
      <Header setBooks={setBooks} bookData={bookData} />
      <Books books={books} setBooks={setBooks}/>  
    </div>
    
  )
}

export default App;

