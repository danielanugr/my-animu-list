import React from 'react'
import { useSelector } from 'react-redux'
import FavAnimeCard from '../Components/FavAnimeCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function FavoriteAnime () {
  const favorites = useSelector(state => state.favorites)
  console.log(favorites)
  return (
    <>
      <hr />
      <div className='d-flex justify-content-center'>
        <h1>Your Favorite Anime</h1>
      </div>
      <hr />
      <div>
        <Container>
          <Row>
            {favorites &&
              favorites.map(favorite => (
                <FavAnimeCard key={favorite.id} anime={favorite} />
              ))}
          </Row>
        </Container>
      </div>
    </>
  )
}
