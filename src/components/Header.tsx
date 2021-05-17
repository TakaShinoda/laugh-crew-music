import React, { FC } from 'react'
import logo from '../img/logo.png'
import './styles.css';

export const Header: FC = () => {
  return (
    <>
      <header id="header">
        <h1 className="site-title">
          <a href="index.html">
            <img src={logo} alt="logo" />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Top</a>
            </li>
            <li>
              <a href="playlist.html">Playlist</a>
            </li>
            <li>
              <a href="artist.html">Artist</a>
            </li>
            <li>
              <a href="lyrics.html">Lyrics</a>
            </li>
            <li>
              <a href="photos.html">Photos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
