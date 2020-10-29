import React,{Component} from "react";
import ReactDOM,{render} from 'react-dom'


let bookList = [
  {"title":"The Picture of Dorian Grey", "author":"Oscar Wilde", "pages": 346},
  {"title": "The Picture of Dorian Grey", "author": "Oscar Wilde", "pages": 346},
  {"title": "The Picture of Dorian Grey", "author": "Oscar Wilde", "pages": 346},
  {"title": "The Willows", "author":"Algernon Blackwood", "pages": 36}
  

]
const Book = ({title,author,pages}) => {
  return(
    <section>
       <h2>{title}</h2>
       <p>by: {author}</p>
       <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = ({books}) => {
  return(<div>
   {books.map(
     (book, i)=><Book 
     key={i}
     title={book.title}
      author={book.author}
      pages={book.pages}/>
   )}
  </div>)
}
render(
  <>

<Library books={bookList}/>
</>,
document.getElementById('root')
)