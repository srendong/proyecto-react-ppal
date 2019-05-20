import React from 'react';
import '../../assets/styles.css'

const HeaderButton = () => {
    
        return(
        <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
          <i className="fa fa-bars"></i>
        </button>
        )  
}

export default HeaderButton;