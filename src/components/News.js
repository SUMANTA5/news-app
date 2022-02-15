import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps ={
    country: 'in',
    pageSize: 6,
    category: 'sports'
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    
  }

 async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0c2cf3c036264612b7222cb5c005cacf&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
       articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading: false
      })
  }

  handlePreviousClick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0c2cf3c036264612b7222cb5c005cacf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()


  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles,
    loading: false
  })
  }
  handleNextClick= async ()=>{
    
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0c2cf3c036264612b7222cb5c005cacf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
          let data = await fetch(url);
          let parsedData = await data.json()
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
          })
    }
     
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'style={{margin: '35px 0px'}}>News - Tot Headlines</h1>
        {this.state.loading && <Spinner/>}
         <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <Newsitem 
              title={element.title?element.title:""}
              description={element.description?element.description.slice(0,88):""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
              source={element.source.name}/>
            </div>

          })}
          
          <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePreviousClick}> &#8592; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &#8594;</button>
          </div>
         
        </div>
        
      </div>
    )
  }
}

export default News
