const initialState = {
  loading: false
}

function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'LOADING/CHANGELOADING':
      return { ...state, loading: payload }
    default:
      return state
  }
}

export default reducer
