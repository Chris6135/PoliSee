import React from "react";

const Article = ({ a }) => (
  <a href={a.url}>
    <li className="show-page-article">
      <img src={a.image.url} alt={a.title} />
      <div className="caption" >
        <h3>{a.title.replace(/<b>/g,"").replace(/<\/b>/g,"")}</h3>
        <aside>
          <span>{a.provider.name}</span>
          <span>{new Date(a.datePublished).toLocaleDateString()}</span>
        </aside>
      </div>
    </li>
  </a>
);

export default Article;

