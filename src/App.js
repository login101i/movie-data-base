import React from 'react'
import * as s from './App.styles'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import MainPage from './MainPage'
import Favourites from './Favourites'
import Footer from './Footer'
import DefaultPage from './DefaultPage'
import MovieDetails from './MovieDetails'
import { MovieState } from './MovieContext'

const App = () => {
  return (
    <s.App>
      <MovieState>

        <Navbar />
        <Switch>
          <Route path='/' component={MainPage} exact/>
          <Route path='/favourites' component={Favourites} exact />
          <Route path='/moviedetails/:id' component={MovieDetails} exact />
          <Route component={DefaultPage} />
        </Switch>
        <Footer />

      </MovieState>
    </s.App>
  )
}

export default App
