import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
    
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9dd000ae757d47ce81d11591348b5a3f";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>News - Tot Headlines</h1>
         <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitem 
              title={element.title?element.title:""}
              description={element.description?element.description.slice(0,88):""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}/>
            </div>

          })}
         
        </div>
        
      </div>
    )
  }
}

export default News
