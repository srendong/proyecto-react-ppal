import React from 'react';
import '../../assets/styles.css'

const MAinSideForm = () => {
    
        return(
          <form>
          <div className="input-group input-group-lg">
            <input className="form-control" placeholder="Search..." name="s" id="s" type="text"/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary btn-lg">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>  
        );  
}

export default MAinSideForm;