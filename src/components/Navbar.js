import React from 'react';
import "./navbar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Portfolio.</h1>
      <div className='desktopmenu'>
        <Link to="home" className='desktopmenulist' smooth={true}>Home</Link>
        <Link to="about" className='desktopmenulist' smooth={true}>About</Link>
        <Link to="skills" className='desktopmenulist' smooth={true}>Skills</Link>
      
      </div>

      <Link to="contact" className='button' smooth={true}>Contact me</Link>
    </nav>
  );
}

export default Navbar;
