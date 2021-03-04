const initialState = {
  favorites: []
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'FAVORITES/ADDFAVORITE':
      return { ...state, favorites: [...state.favorites, payload] }
    default:
      return state
  }
}

export default reducer
