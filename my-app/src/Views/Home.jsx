import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import AnimeCard from '../Components/AnimeCard'
import useFetch from '../Hooks/useFetch'

import './Home.css'

function Home () {
  const [season, setSeason] = React.useState('winter')
  const url = `https://api.jikan.moe/v3/season/2021/${season}`
  const [animes, loading] = useFetch(url)

  function changeSeason (newSeason, e) {
    e.preventDefault()
    setSeason(newSeason)
  }

  return (
    <div>
      <hr />
      <div className='d-flex justify-content-center'>
        <h1>{season[0].toUpperCase() + season.substring(1)} Anime Database</h1>
      </div>
      <hr className='divider-top' />
      <Container fluid className='nav-season'>
        <Row>
          <Col
            sm={3}
            className='text-center bg-primary'
            style={{ padding: '10px 16px' }}
          >
            <a
              href='winter'
              className='text-light'
              onClick={e => changeSeason('winter', e)}
            >
              Winter
            </a>
          </Col>
          <Col
            sm={3}
            className='text-center bg-success'
            style={{ padding: '10px 16px' }}
          >
            <a
              href='spring'
              className='text-light'
              onClick={e => changeSeason('spring', e)}
            >
              Spring
            </a>
          </Col>
          <Col
            sm={3}
            className='text-center bg-warning'
            style={{ padding: '10px 16px' }}
          >
            <a
              href='summer'
              className='text-light'
              onClick={e => changeSeason('summer', e)}
            >
              Summer
            </a>
          </Col>
          <Col
            sm={3}
            className='text-center bg-danger'
            style={{ padding: '10px 16px' }}
          >
            <a
              href='fall'
              className='text-light'
              onClick={e => changeSeason('fall', e)}
            >
              Fall
            </a>
          </Col>
        </Row>
      </Container>
      <hr className='divider-bottom' />
      {loading ? (
        <div className='d-flex justify-content-center'>
          <Spinner animation='border' />
        </div>
      ) : (
        <Container>
          <Row>
            {animes.map(anime => (
              <AnimeCard anime={anime} key={anime.mal_id} />
            ))}
          </Row>
        </Container>
      )}
      <button type='button' className='btn btn-success btn-circle btn-xl'>
        <i className='fa fa-search'></i>
      </button>
    </div>
  )
}

export default Home
