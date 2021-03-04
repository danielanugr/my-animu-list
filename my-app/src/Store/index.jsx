export function changeSeason (payload) {
  return dispatch => {
    dispatch({ type: 'SEASON/CHANGESEASON', payload })
  }
}

export function changeAnime (payload) {
  return dispatch => {
    dispatch({ type: 'ANIMES/CHANGEANIME', payload })
  }
}

export function changeLoading (payload) {
  return dispatch => {
    dispatch({ type: 'LOADING/CHANGELOADING', payload })
  }
}

export function addFavorite (payload) {
  return dispatch => {
    dispatch({ type: 'FAVORITES/ADDFAVORITE', payload })
  }
}

export function fetchAnime (url) {
  return async dispatch => {
    try {
      dispatch(changeLoading(true))
      const res = await fetch(url)
      const anime = await res.json()
      dispatch(changeAnime(anime))
      dispatch(changeLoading(false))
    } catch (err) {
      console.log(err)
    }
  }
}
