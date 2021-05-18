import React, { FC, useState, useEffect } from 'react'
import mv1 from '../img/mv1.jpg'
import lilac from '../img/lilac.jpg'
import ontheground from '../img/ontheground.jpg'
import whatdoicallyou from '../img/whatdoicallyou.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faPlayCircle,
  faStopCircle,
} from '@fortawesome/free-solid-svg-icons'

declare var MusicKit: any

export const Top: FC = () => {
  const [music, setMusic] = useState<any>()
  const [results, setResults] = useState<any[]>([])
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    setMusic(MusicKit.getInstance())
  }, [])

  const inputKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    let keyword = e.target.value
    console.log(keyword)
    if (keyword) {
      music.api
        .search(keyword, { limit: 30, types: 'artists,songs' })
        .then((datas: any) => {
          console.log(datas)
          setResults(datas.songs.data)
          console.log(datas.songs.data)
          setFlag(true)
        })
    } else {
      setFlag(false)
    }
  }

  const play = (id: string) => {
    console.log(id)
    music.setQueue({ song: id }).then(() => {
      music.play()
    })
  }

  const pause = () => {
    console.log('pause')
    music.stop()
    // music.player.stop()
  }

  const tableView = () => {
    return (
      <table className="music-table">
        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="music-item">
              <td>
                <img
                  src={r.attributes.artwork.url.replace(/({w}|{h})/g, '80')}
                  alt="artworkUrl"
                />
              </td>
              <td className="music-title">{r.attributes.name}</td>
              <td>
                <FontAwesomeIcon
                  className="music-btn"
                  icon={faPlayCircle}
                  onClick={() => play(r.id)}
                />
                <FontAwesomeIcon
                  className="music-btn"
                  icon={faStopCircle}
                  onClick={pause}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  const tuneOfTheDay = () => {
    return (
      <>
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
      </>
    )
  }

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
            <input
              type="text"
              size={25}
              placeholder="アーティスト、曲、歌詞"
              onChange={inputKeyword}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </section>

      <section id="songs" className="wrapper">
        {flag ? tableView() : tuneOfTheDay()}
      </section>
    </>
  )
}
