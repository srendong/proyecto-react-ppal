import React from 'react';
import '../../assets/styles.css'



const HeaderForm = () => {
    
        return(
          <form id="searchForm" action="page-search-results.html" method="get">
          <div className="input-group hola">
            <input type="text" className="form-control" name="q" id="q" placeholder="Search..." required />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        )
    
}

export default HeaderForm;