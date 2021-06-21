import React, { FC } from 'react'
import mv02 from '../img/mv02.jpg'
import { Link } from 'react-router-dom'

export const Playlist: FC = () => {
  return (
    <>
      <main>
        <div className="mv">
          <img src={mv02} alt="メインビジュアル2" />
        </div>

        <nav>
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Top {'>'}</Link>
            </li>
            <li>
              <Link to="/Playlist">Playlist</Link>
            </li>
          </ol>
        </nav>

        <section id="about" className="wrapper">
          <h2 className="section-title">Playlist</h2>
          <div className="content"></div>
        </section>
      </main>
    </>
  )
}
