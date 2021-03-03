import { useState, useEffect } from 'react'

export default function useFetch (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(res)
        }
        return res.json()
      })
      .then(result => {
        if (Array.isArray(result.anime)) {
          setData(result.anime)
        } else {
          setData([...data, result])
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1250)
      })
  }, [url])

  return [data, loading]
}
