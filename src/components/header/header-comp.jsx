import React from 'react';

import {Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header-style.scss';

const Header =() =>{

    console.log(' I m in header');
    return(
    <div className ='header'>

 <Link className ='logo-continer' to='/'>
     <Logo className ='logo' />
 </Link>

<div className='options'>
    <Link className='option' to ='/shop'>Shop</Link>
    <Link className='option' to ='/contact'>Contact</Link>
</div>

    </div>
    )
}
export default Header;