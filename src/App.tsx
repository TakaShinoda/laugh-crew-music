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
import { Dearname } from './components/Dearname'
import { TwentyThree } from './components/TwentyThree'
import { Eight } from './components/Eight'
import { Thevisitor } from './components/Thevisitor'
import { Celebrity } from './components/Celebrity'
import { Palette } from './components/Palette'


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

          <Route path="/Dearname" component={Dearname} />
          <Route path="/TwentyThree" component={TwentyThree} />
          <Route path="/Eight" component={Eight} />
          <Route path="/Thevisitor" component={Thevisitor} />
          <Route path="/Celebrity" component={Celebrity} />
          <Route path="/Palette" component={Palette} />
      </Router>
      <Footer />
    </div>
  )
}
