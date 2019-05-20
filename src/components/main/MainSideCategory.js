import React from 'react';
import '../../assets/styles.css'
import MainSideSubcategory from './MainSideSubcategory';

const MAinSideCategory = (props) => {
    
        return(
          <li className="active">
            <a href="#"> {props.name}</a>
            <ul>
             <MainSideSubcategory name= {'animales'}/>
             <MainSideSubcategory />
             <MainSideSubcategory />
             <MainSideSubcategory />             
            </ul>
          </li>
          
        );  
}

export default MAinSideCategory;