import React from 'react'
import '../styles/components/header.sass'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header_nav'>
            <a href="">HR</a>
            <ul className='header_links'>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>      
    </header>
  )
}

export default Header
