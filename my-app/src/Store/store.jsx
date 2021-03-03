import { createStore } from 'redux'

const initialState = {
  animes: null,
  loading: false,
  season: 'winter',
  favorites: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ANIMES/CHANGEANIME':
      return { ...state, animes: payload }
    case 'SEASON/CHANGESEASON':
      return { ...state, season: payload }
    case 'LOADING/CHANGELOADING':
      return { ...state, loading: payload }
    case 'FAVORITES/ADDFAVORITE':
      return { ...state, favorites: [...state.favorites, payload] }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
