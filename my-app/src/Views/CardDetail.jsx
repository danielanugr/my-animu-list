import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../Store'

export default function CardDetail () {
  const { id } = useParams()
  const url = `https://api.jikan.moe/v3/anime/${id}`
  const [anime, loading] = useFetch(url)
  const history = useHistory()
  const dispatch = useDispatch()

  function goToHome (e) {
    e.preventDefault()
    history.push('/')
  }

  function addToFavorite (payload) {
    dispatch(addFavorite(payload))
  }

  return (
    <>
      <hr />
      <div className='d-flex justify-content-center'>
        <h1>Seasonal Anime Database</h1>
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
                    style={{ width: '100%', height: '100%' }}
                  />
                </Col>
                <Col>
                  <h1>{anime?.title}</h1>
                  <hr />
                  <p>{anime?.synopsis}</p>
                  <hr />
                  <p>Score: {anime?.score}/10</p>
                  <hr />
                  <p>Studios:</p>
                  <ul>
                    {anime?.studios.map(studio => (
                      <li key={studio.mal_id}>{studio?.name}</li>
                    ))}
                  </ul>
                  <hr />
                  <p>
                    {' '}
                    Genre:{' '}
                    <span>
                      {anime &&
                        anime?.genres.map(genre => (
                          <Badge key={genre.mal_id} pill variant='primary'>
                            {genre.name}
                          </Badge>
                        ))}
                    </span>
                  </p>
                  <Button
                    className='btn-fav'
                    onClick={() => addToFavorite(anime)}
                    variant='danger'
                  >
                    Add to Favorite
                  </Button>
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
