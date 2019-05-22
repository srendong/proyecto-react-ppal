import React from 'react';
import '../../assets/styles.css'
import MainDate from './MainPostDate'
import MainPostContent from './MainPostContent';
import MainPostImage from './MainPostImage';

const MainPost = (props) => {
  console.log(props)
  return(
    <article className="post post-large">
      <MainPostImage image={props.picture} />
      <MainDate />
      <MainPostContent
        title={props.title}
        content={props.about}
        tags={props.tags}
      />
    </article>
  )
}

export default MainPost;
