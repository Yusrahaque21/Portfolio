import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact'> 

    <main className='main'>
        <h1>Contact Me</h1>

        <form >
            <div className='field'>
                <label > Name:</label>
                    <input type="text"  required placeholder=''/>
                
            </div>

            <div className='field'>
                <label > Email:</label>
                    <input type="email"  required placeholder=''/>
                
            </div>

            <div className='field'>
                <label > Message:</label>
                    <input type="text"  required placeholder=''/>
                
            </div>

            <button type='submit'>Submit</button>
        </form>

    </main>
    
    </div>
  )
}

export default Contact
