import React from "react";
import Header from "./Header"
import ArticleList from "./ArticleList";
import blogData from "../data/blog";
console.log =('blogData');

function App() {
  return (
    <div className="App">
      <Header name={blogName} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
