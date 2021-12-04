import React from "react";
import "./Article.css";

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt--blog-container-article">
      <div className="gpt--blog-container-article-img">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt--blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
