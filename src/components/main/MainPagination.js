import React from 'react';
import '../../assets/styles.css'

const MainPagination = () => {
    
        return(
          <ul className="pagination pagination-lg pull-right">
          <li>
            <a href="#">«</a>
          </li>
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">»</a>
          </li>
        </ul>
        )  
}

export default MainPagination;