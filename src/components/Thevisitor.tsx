import React, { FC } from 'react'
import mv4 from '../img/mv4.jpg'
import { Link } from 'react-router-dom'

export const Thevisitor: FC = () => {
    return (
        <>
            <main>
        <div className="mv">
          <img src={mv4} alt="メインビジュアル4" />
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
              <Link to="/Thevisitor">The visitor</Link>
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
