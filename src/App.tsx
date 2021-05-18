import React from 'react'
// import './App.css'
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Playlist } from './components/Playlist'
import { Top } from './components/Top'
import { Artist } from './components/Artist'
import { Lyrics } from './components/Lyrics'
import { Photos } from './components/Photos'
import { Footer } from './components/Footer'


export const App = () => {
  return (
    <div className="App">
      <Router>
          <Header />
          <Route exact path="/" component={Top} />
          <Route path="/Playlist" component={Playlist} />
          <Route path="/Artist" component={Artist} />
          <Route path="/Lyrics" component={Lyrics} />
          <Route path="/Photos" component={Photos} />
      </Router>
      <Footer />
    </div>
  )
}
