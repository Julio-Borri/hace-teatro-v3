import React from 'react';
import { Link } from 'react-router-dom';

const navLink = (props) => (
  <li className='nav-item active'>
    <Link to={props.path} className={props.classLink}>
      {props.children}
    </Link>
  </li>
);

export default navLink;
