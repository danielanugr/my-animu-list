import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import animeReducer from './reducers/anime'
import seasonReducer from './reducers/season'
import loadingReducer from './reducers/loading'
import favoriteReducer from './reducers/favorite'

const rootReducer = combineReducers({
  anime: animeReducer,
  season: seasonReducer,
  loading: loadingReducer,
  favorite: favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
