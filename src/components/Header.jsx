import React from 'react'
import '../styles/components/header.sass'

const Header = () => {
  return (
    <header className='header'>
        <nav className='header_nav'>
            <a href="#home">HR</a>
            <ul className='header_links'>
                <li><a href="#profile">Profile</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>      
    </header>
  )
}

export default Header
