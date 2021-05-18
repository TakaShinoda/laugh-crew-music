import React, { FC } from 'react'
import mv1 from '../img/mv1.jpg'
import lilac from '../img/lilac.jpg'
import ontheground from '../img/ontheground.jpg'
import whatdoicallyou from '../img/whatdoicallyou.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Top: FC = () => {
  return (
    <>
      <main>
        <div className="mv">
          <img src={mv1} alt="メインビジュアル" />
        </div>
      </main>
      <section id="serch" className="wrapper">
        <h2 className="serch-title">
          <span className="l-title"> What is</span>
          <span className="m-title b-title"> your favorite</span>
          <br />
          <span className="l-title">music?</span>
        </h2>

        <div className="content">
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />

          <div className="search_container">
            <input type="text" size={25} placeholder="アーティスト、曲、歌詞" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </section>

      <section id="songs" className="wrapper">
        <h2 className="section-title">Tune of the Day</h2>
        <ul>
          <li>
            <img src={lilac} alt="lilacのジャケット写真" />
            <h3 className="content-title">Lilac</h3>
            <p>IU</p>
          </li>
          <li>
            <img src={ontheground} alt="on the groundのジャケット写真" />
            <h3 className="content-title">On The Ground</h3>
            <p>R</p>
          </li>
          <li>
            <img
              src={whatdoicallyou}
              alt="what do i call youのジャケット写真"
            />
            <h3 className="content-title">What Do I Call You</h3>
            <p>Taeyen</p>
          </li>
        </ul>
      </section>
    </>
  )
}
