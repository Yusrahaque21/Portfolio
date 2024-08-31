import React from 'react'
import './about.css';
import ui from '../assets/ui.jpg';
import web from '../assets/web.jpg';

const About = () => {
  return (
    <section  className='about'>
       <h1>What I Do?</h1>
       <p>Welcome to my portfolio. I am a passionate frontend developer specializing in creating beautiful and functional web experiences.</p>
        <div className='skillbars'>
            <div className='skillbar'>
                <img  src={web}  alt='web'  className=''/>
                <div className='skilltext'>
                    <h1>Web Design</h1>
                    <p>This is demo text related to ui/ux design.</p>
                </div>
            </div>

            <div className='skillbar'>
                <img  src={ui}  alt='ui'  className=''/>
                <div className='skilltext'>
                    <h1>UI/UX design</h1>
                    <p>This is demo text related to web design.</p>
                </div>
            </div>
        </div>

        
        
    </section>
  )
}

export default About