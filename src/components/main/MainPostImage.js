import React from 'react';
import '../../assets/styles.css'

const MainPostImage = ({ image }) => (
  <div className="post-image">
    <div className="owl-carousel owl-theme" data-plugin-options='{"items":1}'>
      <div>
        <div className="">
          <img className="img-thumbnail" src={image} alt=""/>
        </div>
      </div>
    </div>
  </div>
)

export default MainPostImage;
