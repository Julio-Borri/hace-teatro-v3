import React from 'react';

import './Header.scss';

const header = (props) => (
  <div className='header--container'>
    <div className='header'>
      <h1 className='header--logo header--logo__regular'>HACÉ</h1>
      <h1 className='header--logo header--logo__bold'>TEATRO</h1>
      <div className='header--cordination'>
        <h3 className='header--press'>coordina</h3>
        <h2 className='header--name'>Maria Cecilia Borri</h2>
      </div>
    </div>
  </div>
);

export default header;
