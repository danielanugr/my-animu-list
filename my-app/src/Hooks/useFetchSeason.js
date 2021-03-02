import { useState, useEffect } from 'react'

function useFetchSeason (season) {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/season/2021/${season}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res)
        }
        return res.json()
      })
      .then(({ anime }) => {
        setAnimes(anime)
      })
      .catch(err => {
        console.log(err)
      })
  }, [season])

  return [animes]
}

export default useFetchSeason
