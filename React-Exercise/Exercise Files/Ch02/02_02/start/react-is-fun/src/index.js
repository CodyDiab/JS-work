import React,{Component} from "react";
import ReactDOM,{render} from 'react-dom'


let bookList = [
  {"title":"The Picture of Dorian Grey", "author":"Oscar Wilde", "pages": 346},
  {"title": "The Picture of Dorian Grey", "author": "Oscar Wilde", "pages": 346},
  {"title": "The Picture of Dorian Grey", "author": "Oscar Wilde", "pages": 346},
  {"title": "The Willows", "author":"Algernon Blackwood", "pages": 36}
  

]
const Book = ({title,author,pages,freeBookmark}) => {
  return(
    <section>
       <h2>{title}</h2>
       <p>by: {author}</p>
       <p>Pages: {pages} pages</p>
       <p>Free Book Today: {freeBookmark ? 'yes' : 'no!'}</p>
    </section>
  )
}

class Library extends React.Component {
  state = {
    open:true,
  freeBookmark: true}

    toggleOpenClosed = () =>  {
      this.setState( previousState =>({
        open: !previousState.open
      }))
    }
  
  render() {
       
        const {books} = this.props
      return(
      <div>
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
        
   <button onClick={this.toggleOpenClosed}>Change</button>
      {books.map(
        (book, i)=><Book 
        key={i}
        title={book.title}
          author={book.author}
          pages={book.pages}
          freeBookmark={this.state.freeBookmark}/>
       )}
  </div>
      )}
}
render(
  <>

<Library books={bookList}/>
</>,
document.getElementById('root')
)