import React from 'react'
import './meme.css'

function Meme() {
  return (

    <main className='main'>
        <div className='form'>
            
            <input types="text"
             placeholder='Top Text'
             className='form--input'

              />
            <input types="text"
             placeholder='Bottom Text' 
             className='form--input'

             />
            <button className='form--bottom'> 
                Get a new meme image 🖼 
            </button>

        </div>
    </main>

  )
}

export default Meme;

// forms in react refrech the page when you click on the button that is why we chnaged it to a div in order to not refresh the page