import React from 'react';
import './mainPostContent.css'

const MainPostContent = ({ title, content, tags }) => {
  return(
    <div className="post-content">

    <h2>
      <a href="blog-post.html">{title}</a>
    </h2>
    <p>{content}. [...]</p>

    <div className="post-meta">
      <span>
        <i className="fa fa-user"></i> By
        <a href="#">John Doe</a>
      </span>
      <span>
        <i className="fa fa-tag"></i>
        { tags && tags.length && tags.map((tag, idx) => (<a key={idx} href="/" className="tag">{tag}</a>)) }
      </span>
      <span>
        <i className="fa fa-comments"></i>
        <a href="#">12 Comments</a>
      </span>
      <a href="blog-post.html" className="btn btn-xs btn-primary pull-right">Read more...</a>
    </div>

  </div>
  )
}

export default MainPostContent;
