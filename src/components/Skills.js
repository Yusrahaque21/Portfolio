import React from 'react';
import './skills.css';
import html from '../assets/html.png'; 
import css from '../assets/css.png'; 
import js from '../assets/js.png'; 
import react from '../assets/react.png'; 
import fg from '../assets/figma.png'; 

const Skills = () => { 
  return (
    <section id="skills" className='myskills'>
      <h1>My Skills</h1>
      <p>Here are some of the skills I've acquired and used in my projects.</p>

      <div className='skills'>
        <div className='skill'>
          <img src={html} alt='HTML' className='skillimg'/>
          <h2>HTML</h2>
          <p>Experienced in building semantic and accessible web pages.</p>
        </div>

        <div className='skill'>
          <img src={css} alt='CSS' className='skillimg'/>
          <h2>CSS</h2>
          <p>Skilled in designing responsive layouts and animations.</p>
        </div>

        <div className='skill'>
          <img src={js} alt='JavaScript' className='skillimg'/>
          <h2>JavaScript</h2>
          <p>Proficient in modern JavaScript and its frameworks.</p>
        </div>

        <div className='skill'>
          <img src={react} alt='React' className='skillimg'/>
          <h2>React</h2>
          <p>Expert in building dynamic and efficient single-page applications.</p>
        </div>

        <div className='skill'>
          <img src={fg} alt='fg' className='skillimg'/>
          <h2>Figma</h2>
          <p>Skilled in designing responsive layouts</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
