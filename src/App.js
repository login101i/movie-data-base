import React from 'react'
import * as s from './App.styles'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import MainPage from './MainPage'
import Favourites from './Favourites'
import Footer from './Footer'
import DefaultPage from './DefaultPage'
import MovieDetails from './MovieDetails'


const App = () => {
  return (
    <s.App>

      <Navbar />
      <Switch>

        <Route path='/' component={MainPage} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/movie/:movieId' component={MovieDetails} />
        <Route component={DefaultPage} />

      </Switch>
      <Footer />

    </s.App>
  )
}

export default App
