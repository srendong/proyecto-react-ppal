import React from "react";
import "../../assets/styles.css";

const MainPageHeader = () => {
  return (
    <section className="page-header">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="active">Blog</li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h1>Super Project Frontend Developers</h1>
      </div>
    </div>
  </div>
</section>
  );
};

export default MainPageHeader;
