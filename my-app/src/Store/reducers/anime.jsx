const initialState = {
  animes: null
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ANIMES/CHANGEANIME':
      return { ...state, animes: payload }
    default:
      return state
  }
}

export default reducer
