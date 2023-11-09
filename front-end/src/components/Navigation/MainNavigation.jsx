import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
const MainNavigation = () => {
  return (
    <nav>
      <h2>Quote App</h2>
      <ul>
        <li> <Link to="/"> All Quotes</Link> </li>
        <li> <Link to="/new"> New Quotes</Link> </li>
      </ul>
    </nav>
  )
}

export default MainNavigation

// 1st-sept 51:53:00 tak hua he library ka puchh rahe he wha tak;