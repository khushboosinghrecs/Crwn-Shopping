import React from 'react';

import Directory from '../../components/directory/directory-comp';

import './mycss.scss'
const HomePage = () => {
  console.log(' I m in homepage');
  return (<div className='homepage'>
    <Directory />
  </div>)
};

export default HomePage;