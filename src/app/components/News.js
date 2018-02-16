import React from "react";
import {Link} from "react-router-dom";
const nyt_api_key = require("../nyt_api_key");

export class News extends React.Component {

  constructor(props){
    super();

    this.state = {
        lastUpdated: "Not yet updated",
        newsResults: []
    }

  }


  // fetches latest news and sets it to state to re-render the UI if needed
  updateNews(){

    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key="+ nyt_api_key;
    // help from: https://reactjs.org/docs/faq-ajax.html and NYTimes API https://developer.nytimes.com/
    // ajax call which sets state to display time updated and news results.
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            lastUpdated: "News Last Updated: " + result.last_updated,
            newsResults: result.results
          });
        },

        (error) => {
          console.log("Error in componentDidMount");
          this.setState({
            lastUpdated: "Error Updating News",
            newsResults: [],
            error
          });
        }
      )
  }




  // update news once component mounts
  componentDidMount(){
    this.updateNews();
  }




  render(){

    // instantiate newsList
    const newsList = (
        <ul className={"list-group"}>
              {/* Iterate through news stories, creating item for each */}
              {this.state.newsResults.map((result, i) =>
                  <li
                    id={"result_"+i}
                    key={"result_"+i}
                    className={"list-group-item news_story"}>

                    {/* Thumbnail image */}
                    {/* if news result has 1 or more images, pick first one as thumbnail */}
                    <img id={"thumbnail_"+i}
                      key={"thumbnail_"+i}
                      src={this.state.newsResults[i].multimedia.length > 0 ? this.state.newsResults[i].multimedia[0].url : ""}></img>

                    {/* Link with title */}
                    <a href={result.url}
                      id={"result_"+i}
                      key={"result_"+i}>{result.title}</a>
                    {/* Author */}
                    <h6 id={"author_"+i} key={"author_"+i}>{result.byline}</h6>
                  </li>
              )}
        </ul>
      );


    return (
      <div>
        <h3>News (NY Times Top Stories) </h3>
        <h6>{this.state.lastUpdated}</h6>
        <button onClick={() => this.updateNews()} className="btn btn-primary"><span className="glyphicon glyphicon-refresh"></span></button>
        <hr/>

        {newsList}

        <h6>News source: Copyright (c) 2018 The New York Times Company. All Rights Reserved.</h6>
      </div>
    );
  }
}
