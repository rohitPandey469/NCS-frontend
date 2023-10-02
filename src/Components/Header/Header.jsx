import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <h1>Nibble Computer Society</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header