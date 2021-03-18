let initialFavorite = []
if (!localStorage.getItem('favorites')) {
  localStorage.setItem('favorites', [])
} else {
  initialFavorite = JSON.parse(localStorage.getItem('favorites'))
}

const initialState = {
  favorites: initialFavorite
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'FAVORITES/ADDFAVORITE':
      localStorage.setItem(
        'favorites',
        JSON.stringify([...state.favorites, payload])
      )
      return { ...state, favorites: [...state.favorites, payload] }
    default:
      return state
  }
}

export default reducer
