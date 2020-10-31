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

const Hiring = () => 
<div>
   <p> The Library is hiring!</p>
</div>

const NotHiring = () => 
<div>
  <p>Not hiring</p>
</div>
class Library extends React.Component {

  static defaultProps = {
    books: [
      {title: "Our Lady of the Flowers", "author": "Gene Genet", "pages": 1263}
    ]
  }
  state = {
    open:true,
  freeBookmark: true,
  hiring : false,
  data: [],
loading:false}

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
    .then(data => data.json())
    .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("Updated")
  }

    toggleOpenClosed = () =>  {
      this.setState( previousState =>({
        open: !previousState.open
      }))
    }
  
  render() {
       
        const {books} = this.props
      return(
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}
        {this.state.loading 
        ? 'loading...'
        : <div>
            {this.state.data.map(product => {
              return (
                <div>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} alt={product.name}/>
                </div>
              )
            })}
         </div>}
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