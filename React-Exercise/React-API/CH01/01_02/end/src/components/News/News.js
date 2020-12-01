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
    const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-01&sortBy=publishedAt&apiKey=0971b0705e864f828690bc27831d3770";

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

