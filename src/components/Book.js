import React,{useState,useRef} from 'react'
const Book = ({book}) => {
    const {title,img_link,rating,review,author}=book;
    const [reviewOn,setReviewOn]=useState(false);
    const reviewRef=useRef();
    const handleToggle=(e)=>{
        e.preventDefault();
        setReviewOn(!reviewOn);
        console.log(reviewOn);

    }
    const handleJump=()=>{
        reviewRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='book'>
            <h3>{title}</h3>
            <img src={String(img_link)} alt={title} />
            <div className="book-info">
                <div className='review-section'>
                    <p><span>Review by :</span> <em>{author}</em> </p>
                    <button onClick={handleToggle} className='btn'>Read</button>
                </div>
                
                <div className="rating">
                    {rating} / 5
                </div>
            </div>
            <div id="review" className={reviewOn?"review":"review-disable"}>
                <div id='review-top' ref={reviewRef}  >
                    <button onClick={handleToggle} className='btn x-btn'>X</button>
                    <h3>Review</h3>
                    {review}   
                </div>
                <div>
                    <button className='btn jump-btn' onClick={handleJump}> Top </button>
                </div>
            </div>
            
        </div>
    )
}

export default Book



/*


  


const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');
showBooks(bookData);
function showBooks(books)
{
    main.innerHTML='';
    books.forEach(book => {
        const {title,img_link,rating,review,author}=book;
        let bookdiv=document.createElement('div');
        bookdiv.classList.add('book');
        bookdiv.innerHTML=`<h3>${title}</h3>
        <img src="${img_link}" alt="${title}">
        <div class="book-info">
        <p><span>Review by :</span> <em>${author}</em> </p>
        <div class="rating">
        ${rating} / 5</div>
        </div>
        <div class="review" >
        <h3>Review</h3>
    
        ${review}
        
        </div>`
        main.appendChild(bookdiv);
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let searchTerm = search.value;
    console.log(searchTerm);
    if(searchTerm && searchTerm!=='')
{   
    for(let i=0;i<bookData.length;i++)
    {
        if(bookData[i].title===searchTerm)
        {
            showBooks(bookData[i]);
            search.value='';
            break;
        }
    }
    
}
else{
    window.location.reload();
}
})

*/