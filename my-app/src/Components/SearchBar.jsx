import { DebounceInput } from 'react-debounce-input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAnime } from '../Store'
import { useHistory } from 'react-router-dom'

function SearchBar (props) {
  const { showSearch } = props
  const [value, setValue] = useState('')
  const searchUrl = `https://api.jikan.moe/v3/search/anime?q=${value}`
  const dispatch = useDispatch()
  const history = useHistory()

  function handleChange (e) {
    setValue(e.target.value)
  }

  function searchAnime () {
    dispatch(fetchAnime(searchUrl))
    history.push('/search')
  }

  return (
    <>
      <div
        className='overlay'
        style={showSearch ? { display: 'block' } : { display: 'none' }}
      >
        <div className='overlay-content'>
          <DebounceInput
            className='search-field'
            debounceTimeout={750}
            onChange={handleChange}
          />
        </div>
        <button onClick={searchAnime}>
          <i className='fa fa-search'></i>
        </button>
      </div>
    </>
  )
}
export default SearchBar
