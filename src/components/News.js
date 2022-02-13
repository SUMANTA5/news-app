import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
   
  articles =  [
    {
        "source":{
            "id":null,
            "name":"Emprendedoresnews.com"
            },
            "author":"Marcelo Berenstein",
            "title":"El hábito más inusual de Elon Musk debería ser probado por los buenos líderes",
            "description":"La segunda persona más rica del planeta tiene un hábito inusual entre los hombres de negocios exitosos. Un recurso que todos deberíamos practicar\nLa entrada El hábito más inusual de Elon Musk debería ser probado por los buenos líderes aparece primero en Empre…",
            "url":"https://emprendedoresnews.com/destacados/el-habito-mas-inusual-de-elon-musk-deberia-ser-probado-por-los-buenos-lideres.html",
            "urlToImage":"https://emprendedoresnews.com/wp-content/uploads/2022/01/Elon-Musk-y-los-sesgos-cognitivos-compressed.jpg",
            "publishedAt":"2022-02-13T14:36:21Z",
            "content":"por Jason Aten – INC\r\nLa segunda persona más rica del planeta tiene un hábito inusual entre los hombres de negocios exitosos. Un recurso que todos deberíamos practicar\r\nTomar mejores decisiones se re… [+4888 chars]"
    },
            {
                "source":{
                    "id":null,
                    "name":"Livemint"
                    },
                    "author":"WSJ",
                    "title":"Cathie Wood’s ARK stays the course, betting big on innovation",
                    "description":"ARK Investment Management is snapping up more shares of largely unprofitable companies",
                    "url":"https://www.livemint.com/companies/news/cathie-wood-s-ark-stays-the-course-betting-big-on-innovation-11644761555661.html",
                    "urlToImage":"https://images.livemint.com/img/2022/02/13/600x338/ARK-TESLA--0_1644761891514_1644761912794.JPG",
                    "publishedAt":"2022-02-13T14:20:05Z",
                    "content":"Cathie Woods ARK Investment Management LLC is snapping up more shares of largely unprofitable companies, doubling down on a bet that many traders and investors expect to be tested this year by rising… [+4803 chars]"
            },
                    {
                        "source":{
                            "id":null,
                            "name":"Motley Fool"
                            },
                            "author":"newsfeedback@fool.com (Daniel Foelber)",
                            "title":"Is Ford the Best EV Stock to Buy and Hold for Decades?",
                            "description":"Ford expects its electric vehicle production capacity to reach 600,000 by 2023.",
                            "url":"https://www.fool.com/investing/2022/02/13/is-ford-the-best-ev-stock-to-buy-in-february/",
                            "urlToImage":"https://g.foolcdn.com/editorial/images/664882/1-ford-mach-e-suv.jpeg",
                            "publishedAt":"2022-02-13T14:01:00Z",
                            "content":"Despite a positive day for the S&amp;P 500, share prices of Ford Motor Company (NYSE:F) fell 9.7% last Friday after the company reported its fourth-quarter 2021 earnings that indicated slowing growth… [+5413 chars]"
                    }
]
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
    
  }


  render() {
    return (
      <div className='container my-3'>
        <h1>News - Tot Headlines</h1>
         <div className='row'>
          <div className='col-md-4'>
           <Newsitem title="my title" 
            description="my description"
            urlToImage="https://emprendedoresnews.com/wp-content/uploads/2022/01/Elon-Musk-y-los-sesgos-cognitivos-compressed.jpg"
            newsUrl=""/>
           </div>
           <div className='col-md-4'>
           <Newsitem title="my title" description="my description"/>
           </div>
           <div className='col-md-4'>
           <Newsitem title="my title" description="my description"/>
           </div>
        </div>
        
      </div>
    )
  }
}

export default News
