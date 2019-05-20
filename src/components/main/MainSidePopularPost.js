import React from "react";
import "../../assets/styles.css";

const MainSidePupolarPost = () => {
  return (
    <li>
      <div className="post-image">
        <div className="img-thumbnail">
          <a href="blog-post.html">
            <img src="img/blog/blog-thumb-1.jpg" alt="" />
          </a>
        </div>
      </div>
      <div className="post-info">
        <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
        <div className="post-meta">Jan 10, 2018</div>
      </div>
    </li>
  );
};

export default MainSidePupolarPost;
