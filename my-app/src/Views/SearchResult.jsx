import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import AnimeCard from '../Components/AnimeCard'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import '../Components/SearchPopup.css'
import SearchBar from '../Components/SearchBar'

function SearchResult () {
  const animes = useSelector(state => state.anime.animes)
  const loading = useSelector(state => state.loading.loading)
  const [showSearch, setShowSearch] = useState(false)

  function showPopup (e) {
    e.preventDefault()
    setShowSearch(!showSearch)
  }

  return (
    <div>
      <SearchBar showSearch={showSearch} />
      <div className='d-flex justify-content-center'>
        <h1 className='text-center'>Search Result</h1>
      </div>
      <hr />
      {loading ? (
        <div className='d-flex justify-content-center'>
          <Spinner animation='border' />
        </div>
      ) : (
        <Container>
          {animes?.results?.length === 0 ? (
            <div className='d-flex justify-content-center'>
              <h2 className='text-center'>No info about this season yet.</h2>
            </div>
          ) : (
            <Row>
              {animes &&
                animes?.results?.map(anime => (
                  <AnimeCard anime={anime} key={anime.mal_id} />
                ))}
            </Row>
          )}
        </Container>
      )}
      <button
        onClick={showPopup}
        type='button'
        className='btn btn-success btn-circle btn-xl'
      >
        <i className='fa fa-search'></i>
      </button>
    </div>
  )
}

export default SearchResult
