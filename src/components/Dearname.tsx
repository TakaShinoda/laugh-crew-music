import React, { FC } from 'react'
import mv04 from '../img/mv04.jpg'
import { Link } from 'react-router-dom'

export const Dearname: FC = () => {
  return (
    <>
      <main>
        <div className="mv">
          <img src={mv04} alt="メインビジュアル4" />
        </div>

        <nav>
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Top {'>'}</Link>
            </li>
            <li>
              <Link to="/Lyrics">Lyrics {'>'}</Link>
            </li>

            <li>
              <Link to="/Dearname">Dear name</Link>
            </li>
          </ol>
        </nav>

        <section id="songs" className="wrapper">
          <h2 className="section-title">Lyrics</h2>
        </section>
      </main>
    </>
  )
}
