import React from 'react'
import './NavBar.css';
import {Link} from 'react-scroll';

import waqar from '../Assets/waqar.png';
const NavBar = () => {
  return (
    <nav className='navbar'>
        <img src={waqar} alt='' className='logo'/>
        <div  className='navmenu'>
        <Link className='navitem'>Home</Link>
        <Link className='navitem'>About</Link>
        <Link className='navitem'>Portfolio</Link>
        <Link className='navitem'>Clients</Link>

        </div>
        <button className='navbtn'>
        <i class="fa-solid fa-id-card-clip"></i>Contact Me
        </button>
    </nav>
  )
}

export default NavBar

