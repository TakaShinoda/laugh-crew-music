import React, { FC } from 'react'
import mv04 from '../img/mv04.jpg'
import { Link } from 'react-router-dom'
import dearname from '../img/dearname.jpg'
import twentyThree from '../img/twenty-three.jpg'
import eight from '../img/eight.jpg'
import thevisitor from '../img/thevisitor.jpg'
import celebrity from '../img/celebrity.jpg'
import palette from '../img/palette.jpg'

export const Lyrics: FC = () => {
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
              <Link to="/Lyrics">Lyrics</Link>
            </li>
          </ol>
        </nav>

        <section id="songs" className="wrapper">
          <h2 className="section-title">Lyrics</h2>

          <div className="box">
            <div className="lyrics-img">
              <Link to="/Dearname">
                <img src={dearname} alt="dearnameの写真" />
              </Link>
            </div>
            <div className="text-box">
              <h2>Dear name</h2>
              <p>テキストが入ります。</p>
              <div className="buttons-coll">
                <Link to="/Dearname" className="custom-btn btn-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="lyrics-img">
              <Link to="/TwentyThree">
                <img src={twentyThree} alt="twenty-threeの写真" />
              </Link>
            </div>
            <div className="text-box">
              <h2>Twenty-Three</h2>
              <p>テキストが入ります。</p>
              <div className="buttons-coll">
                <Link to="/TwentyThree" className="custom-btn btn-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="lyrics-img">
              <Link to="/Eight">
                <img src={eight} alt="eightの写真" />
              </Link>
            </div>
            <div className="text-box">
              <h2>eight</h2>
              <p>テキストが入ります。</p>
              <div className="buttons-coll">
                <Link to="/Eight" className="custom-btn btn-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="lyrics-img">
              <Link to="/Thevisitor">
                <img src={thevisitor} alt="thevisitorの写真" />
              </Link>
            </div>
            <div className="text-box">
              <h2>The visitor</h2>
              <p>テキストが入ります。</p>
              <div className="buttons-coll">
                <Link to="/Thevisitor" className="custom-btn btn-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="lyrics-img">
              <Link to="/Celebrity">
                <img src={celebrity} alt="celebrityの写真" />
              </Link>
            </div>
            <div className="text-box">
              <h2>Celebrity</h2>
              <p>テキストが入ります。</p>
              <div className="buttons-coll">
                <Link to="/Celebrity" className="custom-btn btn-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="lyrics-img">
              <Link to="/Palette">
                <img src={palette} alt="paletteの写真" />
              </Link>
            </div>
            <div className="text-box">
              <h2>Palette</h2>
              <p>テキストが入ります。</p>
              <div className="buttons-coll">
                <Link to="/Palette" className="custom-btn btn-1">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
