import React from 'react'
import './navbar.css'
import {RiMenu3Line, React.PropTypes} from 'react-icons/ri'
import {FaSearch} from 'react-icons/fa'

//BEM > Block Element Modifier
//Block: navbar

const Navbar = () => {
  return (
    <div className="gpt33__navbar">
      <div classname="gpt33__navbar-links_container">
        <div classname="gpt33__navbar-links_logo">
          <img src="{logo}" alt="logo" />

        </div>
      </div>
      Navbar
    </div>
  )
}

export default Navbar
