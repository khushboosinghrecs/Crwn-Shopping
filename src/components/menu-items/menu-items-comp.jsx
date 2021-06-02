import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item-style.scss';

function MenuItem({ title, imageUrl, size }){

console.log(' I m in menuitem');
return(
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
    {/* <h1>hello</h1> */}
  </div>
);
    }


export default withRouter(MenuItem);