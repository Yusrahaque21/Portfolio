import React from 'react';
import './home.css';
import profile from '../assets/portrait.png';

const Home = () => {
  return (
    <section id='home' className='home-section'>
      <div className="hero-content">
        <span>Hello,</span>
        <div className="name-container">
          <span className='intro'>I'm  <span className="highlighted-name">  Yusra Haque</span></span>
        </div>
        <p>Welcome to my portfolio. I am a passionate frontend developer specializing in creating beautiful and functional web experiences.</p>
        <a href='/Yusra Haque.pdf' target='_blank' rel='resume'>
        <button className="hero-button">My Resume.</button>
        </a>
      </div>
      <img src={profile} alt="profile" className='hero-image'/>
    </section>
  );
}

export default Home;
