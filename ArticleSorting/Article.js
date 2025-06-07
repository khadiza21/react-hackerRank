import React, { useState } from "react";
// descending order - upvote. initial = most upvoted
// most recent = date in descending order. 


function Articles({ articles = [] }) {
  
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
       {  articles.map((article, index)=> <tr data-testid={`article-${index}`} key="article-index">
            <td data-testid={`article-${article.title}`}>{article.title}</td>
            <td data-testid={`article-${article.upvotes}`}>{article.upvotes} </td>
            <td data-testid={`article-${article.date}`}>{article.date}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
