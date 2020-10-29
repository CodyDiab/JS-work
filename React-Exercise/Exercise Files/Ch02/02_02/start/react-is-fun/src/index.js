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

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
      this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }
    toggleOpenClosed() {
      this.setState( previousState =>({
        open: !previousState.open
      }))
    }
  
  render() {
        console.log(this.state)
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
          pages={book.pages}/>
   )}
  </div>)
}
}
render(
  <>

<Library books={bookList}/>
</>,
document.getElementById('root')
)