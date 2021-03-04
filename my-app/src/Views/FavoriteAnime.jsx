import React from 'react'
import { useSelector } from 'react-redux'
import AnimeCard from '../Components/AnimeCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useHistory } from 'react-router-dom'

export default function FavoriteAnime () {
  const favorites = useSelector(state => state.favorite.favorites)
  const history = useHistory()

  function goToHome (e) {
    e.preventDefault()
    history.push('/')
  }

  return (
    <>
      <hr />
      <div className='d-flex justify-content-center'>
        <h1 className='text-center'>Your Favorite Anime</h1>
      </div>
      <hr />
      <div>
        <Container>
          <Row>
            {favorites &&
              favorites.map(favorite => (
                <AnimeCard key={favorite.mal_id} anime={favorite} />
              ))}
          </Row>
        </Container>
      </div>
      <button
        type='button'
        className='btn btn-success btn-circle btn-xl'
        onClick={goToHome}
      >
        <i className='fa fa-home'></i>
      </button>
    </>
  )
}
