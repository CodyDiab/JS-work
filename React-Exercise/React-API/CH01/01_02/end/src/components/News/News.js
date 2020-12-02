import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: [],
        };
    }
 /// get current date 
componentDidMount(){
    var date = new Date();
    var year = date.getMonth();
    var day = date.getDate();
    var month = date.getMonth();

    const url = `http://newsapi.org/v2/everything?language=en&q=bitcoin&from=${year-month-day}&sortBy=publishedAt&apiKey=0971b0705e864f828690bc27831d3770`;

    fetch(url)
     .then((response)=> {
         return response.json();
     })
     .then((data) => {
         this.setState({
             news: data.articles
         })
     })
     .catch((error) => console.log(error));
}

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render() {
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;

