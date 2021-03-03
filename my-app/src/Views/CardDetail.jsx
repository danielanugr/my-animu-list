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

export default function CardDetail () {
  const { id } = useParams()
  const url = `https://api.jikan.moe/v3/anime/${id}`
  const [anime, loading] = useFetch(url)
  const history = useHistory()
  console.log(anime[0])

  function goToHome (e) {
    e.preventDefault()
    history.push('/')
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
                    src={anime[0]?.image_url}
                    alt={anime[0]?.title}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Col>
                <Col>
                  <h1>{anime[0]?.title}</h1>
                  <hr />
                  <p>{anime[0]?.synopsis}</p>
                  <hr />
                  <p>Score: {anime[0]?.score}/10</p>
                  <hr />
                  <p>Studios:</p>
                  <ul>
                    {anime[0]?.studios.map(studio => (
                      <li key={studio.mal_id}>{studio?.name}</li>
                    ))}
                  </ul>
                  <hr />
                  <p>
                    {' '}
                    Genre:{' '}
                    <span>
                      {anime[0]?.genres.map(genre => (
                        <Badge key={genre.mal_id} pill variant='primary'>
                          {genre.name}
                        </Badge>
                      ))}
                    </span>
                  </p>

                  <Button className='btn-fav' variant='danger'>
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
