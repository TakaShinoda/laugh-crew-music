import React, { FC, useEffect } from 'react'
import mv5 from '../img/mv5.jpg'
import { Link } from 'react-router-dom'
import iu4 from '../img/iu4.jpg'
import iu5 from '../img/iu5.jpg'
import iu9 from '../img/iu9.jpg'
import iu7 from '../img/iu7.jpg'
import iu8 from '../img/iu8.jpg'
import iu6 from '../img/iu6.jpg'
import iu10 from '../img/iu10.jpg'
import iu11 from '../img/iu11.jpg'
import iu13 from '../img/iu13.jpg'

export const Photos: FC = () => {
  useEffect(() => {
    getData()
  }, [])

  const getData = async() =>{
    const response = await fetch('https://www.instagram.com/dlwlrma/?__a=1')
    const data: any = await response.json()
    console.log(data)
  }
  return (
    <>
      <main>
        <div className="mv">
          <img src={mv5} alt="メインビジュアル5" />
        </div>

        <nav>
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Top {'>'}</Link>
            </li>
            <li>
              <Link to="/Photos">Photos</Link>
            </li>
          </ol>
        </nav>

        <section id="photos" className="wrapper">
          <h2 className="section-title">Photos</h2>
          <ul>
            <li>
              <a href={iu4} data-lightbox="group">
                <img src={iu4} width="300" alt="IUの写真4" loading="lazy" />
              </a>
            </li>
            <li>
              <a href={iu5} data-lightbox="group">
                <img src={iu5} width="300" alt="IUの写真5" loading="lazy" />
              </a>
            </li>
            <li>
              <a href={iu9} data-lightbox="group">
                <img src={iu9} width="300" alt="IUの写真9" loading="lazy" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={iu7} data-lightbox="group">
                <img src={iu7} width="300" alt="IUの写真7" loading="lazy" />
              </a>
            </li>
            <li>
              <a href={iu8} data-lightbox="group">
                <img src={iu8} width="300" alt="IUの写真8" loading="lazy" />
              </a>
            </li>
            <li>
              <a href={iu6} data-lightbox="group">
                <img src={iu6} width="300" alt="IUの写真6" loading="lazy" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={iu10} data-lightbox="group">
                <img src={iu10} width="300" alt="IUの写真10" loading="lazy" />
              </a>
            </li>
            <li>
              <a href={iu11} data-lightbox="group">
                <img src={iu11} width="300" alt="IUの写真11" loading="lazy" />
              </a>
            </li>
            <li>
              <a href={iu13} data-lightbox="group">
                <img src={iu13} width="300" alt="IUの写真13" loading="lazy" />
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
