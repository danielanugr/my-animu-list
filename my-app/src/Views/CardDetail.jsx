import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../Store'
import { useState, useEffect } from 'react'
import { fetchAnime } from '../Store'

export default function CardDetail () {
  const { id } = useParams()
  const url = `https://api.jikan.moe/v3/anime/${id}`
  const anime = useSelector(state => state.anime.animes)
  const loading = useSelector(state => state.loading.loading)

  const history = useHistory()
  const dispatch = useDispatch()

  const [isFavorite, setFavorite] = useState(false)
  const favorites = useSelector(state => state.favorite.favorites)

  useEffect(() => {
    dispatch(fetchAnime(url))
    if (favorites.length === 0) {
      setFavorite(false)
    } else {
      const found = favorites.find(
        favorite => favorite.mal_id === anime?.mal_id
      )
      if (found) {
        setFavorite(true)
      } else {
        setFavorite(false)
      }
    }
  }, [favorites, anime?.mal_id, dispatch, url])

  function goToHome (e) {
    e.preventDefault()
    history.push('/')
  }

  function addToFavorite () {
    dispatch(addFavorite(anime))
  }

  return (
    <>
      <hr />
      <div className='d-flex justify-content-center'>
        <h1 className='text-center'>Anime Detail</h1>
      </div>
      <hr />
      <div>
        {!loading ? (
          <Container>
            <Card size='lg'>
              <Row>
                <Col sm={3}>
                  <img
                    src={anime?.image_url}
                    alt={anime?.title}
                    style={{ width: '100%' }}
                  />
                </Col>
                <Col>
                  <h1>{anime?.title}</h1>
                  <hr />
                  <p>{anime?.synopsis}</p>
                  <hr />
                  <p>Score: {anime?.score ? anime?.score : '-'}/10</p>
                  <hr />
                  <p>Studios:</p>
                  <ul>
                    {anime?.studios?.map(studio => (
                      <li key={studio.mal_id}>{studio?.name}</li>
                    ))}
                  </ul>
                  <hr />
                  <p>
                    {' '}
                    Genre:{' '}
                    <span>
                      {anime &&
                        anime?.genres?.map(genre => (
                          <Badge key={genre.mal_id} pill variant='primary'>
                            {genre.name}
                          </Badge>
                        ))}
                    </span>
                  </p>
                  {!isFavorite ? (
                    <Button
                      className='btn-fav'
                      onClick={e => addToFavorite(e)}
                      variant='danger'
                    >
                      Add to Favorite
                    </Button>
                  ) : (
                    <Button className='btn-fav' variant='danger' disabled>
                      Your Favorite
                    </Button>
                  )}
                </Col>
              </Row>
            </Card>
          </Container>
        ) : (
          <div className='d-flex justify-content-center'>
            <Spinner animation='border' />
          </div>
        )}
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
