export function changeSeason (payload) {
  return { type: 'SEASON/CHANGESEASON', payload }
}

export function changeAnime (payload) {
  return { type: 'ANIMES/CHANGEANIME', payload }
}

export function changeLoading (payload) {
  return { type: 'LOADING/CHANGELOADING', payload }
}

export function addFavorite (payload) {
  return { type: 'FAVORITES/ADDFAVORITE', payload }
}
