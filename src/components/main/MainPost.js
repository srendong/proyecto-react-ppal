import React from 'react';
import '../../assets/styles.css'
import MainDate from './MainPostDate'
import MainPostContent from './MainPostContent';
import MainPostImage from './MainPostImage';

const MainPost = () => {
    
        return(
         
        <article className="post post-large">
      <MainPostImage />
      <MainDate />
      <MainPostContent />
      </article>

        )  
}

export default MainPost;