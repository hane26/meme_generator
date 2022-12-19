import React from 'react'
import m from './images/meme.png';
import './header.css'

function Header() {
  return (
    <header className="head">
    <img src={m} className="meme_pic" alt="meme" />
    <h2 className="header--h2"> Memes Generator </h2>
    <h4 className="header--h4"> React - Course </h4>    </header> 


  )
}

export default Header;