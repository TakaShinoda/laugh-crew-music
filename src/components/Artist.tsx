import React, { FC } from 'react'
import mv03 from '../img/mv03.jpg'
import { Link } from 'react-router-dom'
import iu from '../img/iu.jpg'
import dean from '../img/dean.jpg'
import taeyeon from '../img/taeyeon.jpg'
import zico from '../img/zico.jpg'
import chungha from '../img/chungha.jpg'
import tencm from '../img/10cm.jpg'


import youtube_icon from '../img/youtube_icon.jpg'
import insta_icon from '../img/instaicon.png'

export const Artist: FC = () => {
  return (
    <main>
      <div className="mv">
        <img src={mv03} alt="メインビジュアル3" />
      </div>

      <nav>
        <ol className="breadcrumbs">
          <li>
            <Link to="/">Top {'>'}</Link>
          </li>
          <li>
            <Link to="/Artist">Artist</Link>
          </li>
        </ol>
      </nav>

      <section id="artist" className="wrapper">
        <h2 className="section-title">Artist</h2>

        <ul>
          <li>
            <img src={iu} alt="IUの写真です" />
            <h3 className="content-title">IU</h3>
            <div className="sns-icon">
              <a
                href="https://www.instagram.com/dlwlrma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta_icon}
                  alt="インスタのアイコン"
                  className="icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube_icon}
                  alt="youtubeのアイコン"
                  className="icon2"
                />
              </a>
            </div>
          </li>

          <li>
            <img src={dean} alt="DEANの写真です" />
            <h3 className="content-title">DEAN</h3>
            <div className="sns-icon">
              <a
                href="https://www.instagram.com/deantrbl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta_icon}
                  alt="インスタのアイコン"
                  className="icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCnCEKlzi52Yzj2JdBFhKVEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube_icon}
                  alt="youtubeのアイコン"
                  className="icon2"
                />
              </a>
            </div>
          </li>

          <li>
            <img src={taeyeon} alt="テヨンの写真です" />
            <h3 className="content-title">TAEYEON</h3>
            <div className="sns-icon">
              <a
                href="https://www.instagram.com/taeyeon_ss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta_icon}
                  alt="インスタのアイコン"
                  className="icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5z2fxN6rs69cSyXur6X6Mg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube_icon}
                  alt="youtubeのアイコン"
                  className="icon2"
                />
              </a>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <img src={zico} alt="ZICOの写真です" />
            <h3 className="content-title">ZICO</h3>
            <div className="sns-icon">
              <a
                href="https://www.instagram.com/woozico0914/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta_icon}
                  alt="インスタのアイコン"
                  className="icon"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=UuV2BmJ1p_I"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube_icon}
                  alt="youtubeのアイコン"
                  className="icon2"
                />
              </a>
            </div>
          </li>

          <li>
            <img src={chungha} alt="チョンハの写真です" />
            <h3 className="content-title">CHUNGHA</h3>
            <div className="sns-icon">
              <a
                href="https://www.instagram.com/chungha_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta_icon}
                  alt="インスタのアイコン"
                  className="icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC9Gxb0gMCh3EPIDLQXeQUog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube_icon}
                  alt="youtubeのアイコン"
                  className="icon2"
                />
              </a>
            </div>
          </li>

          <li>
            <img src={tencm} alt="10cmの写真です" />
            <h3 className="content-title">10cm</h3>
            <div className="sns-icon">
              <a
                href="https://www.instagram.com/10cm_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta_icon}
                  alt="インスタのアイコン"
                  className="icon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCRmShE13u8THvf_ptRVktRg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube_icon}
                  alt="youtubeのアイコン"
                  className="icon2"
                />
              </a>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}
