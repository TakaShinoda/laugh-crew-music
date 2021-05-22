import React, { FC } from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import './styles.css'

export const Header: FC = () => {
  return (
    <>
      <header id="header">
        <h1 className="site-title">
          <Link to="/">
            <img src={logo} alt="logo" className="site-logo" />
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/Playlist">Playlist</Link>
            </li>
            <li>
              <Link to="/Artist">Artist</Link>
            </li>
            <li>
              <Link to="/Lyrics">Lyrics</Link>
            </li>
            <li>
              <Link to="/Photos">Photos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
