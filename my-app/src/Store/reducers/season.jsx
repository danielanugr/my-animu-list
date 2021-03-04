const initialState = {
  season: 'winter'
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'SEASON/CHANGESEASON':
      return { ...state, season: payload }
    default:
      return state
  }
}

export default reducer
