import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9dd000ae757d47ce81d11591348b5a3f&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePreviousClick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9dd000ae757d47ce81d11591348b5a3f&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()


  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles
  })
  }
  handleNextClick= async ()=>{
    
    if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9dd000ae757d47ce81d11591348b5a3f&page=${this.state.page + 1}&pageSize=20`;
          let data = await fetch(url);
          let parsedData = await data.json()
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
          })
     }
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
          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePreviousClick}> &#8592; Previous</button>
          <button type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &#8594;</button>
          </div>
         
        </div>
        
      </div>
    )
  }
}

export default News
