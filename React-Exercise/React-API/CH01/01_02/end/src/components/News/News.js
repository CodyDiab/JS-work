import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
constructor(props){
    super(props);
    this.state = {
        news:[],
    }
}

componentDidMount(){
    const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-24&sortBy=publishedAt&apiKey=0971b0705e864f828690bc27831d3770";

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
            <NewSingle key={item.id} item={item} />
        ));
    }

    render() {
        return(
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default News;

