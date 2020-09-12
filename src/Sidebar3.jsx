import React from 'react';
import {Router, Link } from 'react-router-dom';
 import './sideBra.scss';

const  Sidebar3 = ({days}) => {

  return (
    <>
    
      <div className="side-navigation" > 
        <h3>Навигация по дням </h3>
        <ul className="side-navigation__list">
          {days.map( day => (
           
           <li>
             <Router>
            <Link to="/"
              key={day} 
              className="side-navigation__list-link"
            >
              {`День ${day}`}
            </Link>
            </Router>
            </li>
           
           
          ))
          }
        </ul>
      </div>
    </>
  );
};
export default  Sidebar3 ;