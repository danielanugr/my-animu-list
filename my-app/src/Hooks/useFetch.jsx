import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeAnime, changeLoading } from '../Store'

export default function useFetch (url) {
  const dispatch = useDispatch()
  const animes = useSelector(state => state.animes)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(changeLoading(true))
    fetch(url)
      .then(res => {
        console.log(res)
        if (!res.ok) {
          throw Error(res)
        }
        return res.json()
      })
      .then(result => {
        dispatch(changeAnime(result))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(changeLoading(false))
        }, 1250)
      })
  }, [url, dispatch])

  return [animes, loading]
}
