import React from 'react';
import '../../assets/styles.css'

const MainPostImage = () => {
    
        return(
          <div className="post-image">
          <div className="owl-carousel owl-theme" data-plugin-options='{"items":1}'>
            <div>
              <div className="img-thumbnail">
                <img className="img-responsive" src="img/blog/blog-image-3.jpg" alt=""/>
              </div>
            </div>
            <div>
              <div className="img-thumbnail">
                <img className="img-responsive" src="img/blog/blog-image-2.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
        )  
}

export default MainPostImage;