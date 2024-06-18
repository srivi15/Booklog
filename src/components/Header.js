import React,{useState} from 'react'

const Header = ({setBooks,bookData}) => {
    const [search,setSearch]=useState('');
    const handleChange=(e)=>{
        setSearch(e.target.value.toLowerCase());
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleSearch(search);

    }
    const handleSearch=(keyword)=>{
        let filteredBooks=bookData.filter((book)=>{
            if(book.title.toLowerCase().includes(keyword)){
                return book;
            }
            
        });
        setBooks(filteredBooks);
        console.log(filteredBooks);

    }
    return (
        <header>
            <h4 className="logo">b<span>._.</span>logger</h4>
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" id="search" className="search" placeholder="Search book by name..." value={search} onChange={handleChange} />
            </form>

        </header>
    )
}

export default Header
