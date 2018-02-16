import React from "react";

export class Home extends React.Component {
  render(){
    return (
      <div className="home_div">
        <h3>Home</h3>
        <hr />

        <a href="https://www.youtube.com/playlist?list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS">
          I created this by following Academind's tutorial 'ReactJS Basics'
        </a>

        <h6>This tutorial introduced me to:</h6>

        <ul>
          <li>Webpack</li>
          <li>State and stateless components</li>
          <li>Outputting dynamic data</li>
          <li>Passing information through props</li>
          <li>Bidirectional communication between components</li>
          <li>Two way binding</li>
          <li>The component lifecycle</li>
          <li>Routing between multiple components</li>
        </ul>

        <hr />

        <p>
          I had to learn routing independent of the tutorial as the tutorial was not made
          for React v4. After finishing the tutorial, I turned one component into a <a href={"/news"}>list
          of top stories from the New York Times API.</a> For this I introduced myself to Sass.
        </p>


      </div>
    );
  }
}
