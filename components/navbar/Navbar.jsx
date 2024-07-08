import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

//BEM > Block Element Modifier
//Block: navbar

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div classname="gpt3__navbar-links">
        <div classname="gpt3__navbar-links_logo">
          <img src="{logo}" alt="logo" />
        </div>
        <div classname="gpt3__navbar-links_container">
          <a href="#home">Home</a>
          <a href="#gpt3">What is GPT?</a>
          <a href="#possibility">Open AI</a>
          <a href="#features">Studies</a>
          <a href="#blog">Library</a>
        </div>
      </div>
      <div classname="gpt3__navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div classname="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line onClick={() => setToggleMenu(true)} />
        )}
      </div>

    </div>
  )
}

export default Navbar
