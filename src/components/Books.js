import React from 'react'
import Book from './Book'

const Books = ({books}) => {
    return (
        <main id='main'>
            {books.length!==0?books.map((book)=>{return (<Book key={Math.round(Math.random()*999+1)} book={book}/>)}):(
            <div className='no-results'><h2>Book not available!</h2></div>
            )}
        </main>
    )
}

export default Books

