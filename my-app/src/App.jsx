import './App.css'
import Home from './Views/Home'
import FloatingButton from './Components/FloatingButton'
import CardDetail from './Views/CardDetail'
import FavoriteAnime from './Views/FavoriteAnime'
import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <FloatingButton />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/anime/:id'>
          <CardDetail />
        </Route>
        <Route exact path='/favorites'>
          <FavoriteAnime />
        </Route>
      </Switch>
    </div>
  )
}

export default App
