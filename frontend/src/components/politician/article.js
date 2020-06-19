import React from "react";

const Article = ({ a }) => (
  <a href={a.url}>
    <li className="show-page-article">
      <img src={a.urlToImage} alt={a.title} />
      <div className="caption" >
        <h3>{a.title}</h3>
        <aside>
          <span>{a.source.name}</span>
          <span>{new Date(a.publishedAt).toLocaleDateString()}</span>
        </aside>
      </div>
    </li>
  </a>
);

export default Article;
