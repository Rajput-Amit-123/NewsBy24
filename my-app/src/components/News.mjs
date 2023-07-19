import React, { Component } from 'react';
import NewsItem from './NewsItem.mjs';
import Spinner from './Spinner.mjs';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      country: props.country,
      loading:false,
      articles: [],
      ArticleLength: 0,
      totalResult:0,
      page: 1
    };
  }

  async componentDidMount() {
    let { category } = this.state;
    let { country } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=55ad742ec5ab459db4ef9de4da59146c&page=${this.state.page}&pageSize=5`;
    this.setState({ loading: true });
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedDATA = await data.json();
    console.log(this.state.ArticleLength,"m");
    this.setState({ articles: parsedDATA.articles, ArticleLength: parsedDATA.articles.length, loading: false});
    await this.setState({totalResult:parsedDATA.totalResults});
    console.log(this.state.totalResult);
  }

  // https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=dcb9da25f57341188f2b8281a2de8499&page=1&pageSize=20
  fetchMoreData = async() => {
    let { category } = this.state;
    let { country } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=55ad742ec5ab459db4ef9de4da59146c&page=${this.state.page}&pageSize=5`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedDATA = await data.json();
    console.log(this.state.ArticleLength, "f1");
    this.setState({ articles: this.state.articles.concat(parsedDATA.articles),ArticleLength:this.state.ArticleLength + parsedDATA.articles.length});
    console.log(this.state.ArticleLength, "f2");
  };



  render() {
    return (
      <div>
        <div className="container">
          {this.state.loading && <Spinner/>}
          
            <InfiniteScroll
              dataLength={this.state.ArticleLength}
              next={this.fetchMoreData}
            hasMore={this.state.ArticleLength !== this.state.totalResult}
              loader={<Spinner />}
            >

            <div className="row">
            {this.state.articles?.map((element) => (
              <div className="col-md-4 my-3 parent" key={element.url}>
              <NewsItem 
                title={element.title ? element.title : "Not find"} 
                discription={element.description ? element.description : "not found"} 
                imgurl={element.urlToImage ? element.urlToImage : "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"} 
                newsUrl={element.url ? element.url : "Not Found"} 
                />
              </div>
            ))}
            </div>
            </InfiniteScroll>
          
        </div>
      </div>
    );
  }
}

export default News;
