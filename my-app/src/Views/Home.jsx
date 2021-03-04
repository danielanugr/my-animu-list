import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import AnimeCard from '../Components/AnimeCard'
import { useSelector, useDispatch } from 'react-redux'
import { changeSeason } from '../Store'
import { useEffect } from 'react'
import { fetchAnime } from '../Store'

import './Home.css'

function Home () {
  const season = useSelector(state => state.season.season)
  const url = `https://api.jikan.moe/v3/season/2021/${season}`
  const animes = useSelector(state => state.anime.animes)
  const loading = useSelector(state => state.loading.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAnime(url))
  }, [url, dispatch])

  function setSeason (newSeason, e) {
    e.preventDefault()
    dispatch(changeSeason(newSeason))
  }

  return (
    <div>
      <div className='d-flex justify-content-center'>
        <h1 className='text-center'>
          {season[0].toUpperCase() + season.substring(1)} Anime Database
        </h1>
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
              onClick={e => setSeason('winter', e)}
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
              onClick={e => setSeason('spring', e)}
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
              onClick={e => setSeason('summer', e)}
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
              onClick={e => setSeason('fall', e)}
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
          {animes?.anime?.length === 0 ? (
            <div className='d-flex justify-content-center'>
              <h2 className='text-center'>No info about this season yet.</h2>
            </div>
          ) : (
            <Row>
              {animes &&
                animes?.anime?.map(anime => (
                  <AnimeCard anime={anime} key={anime.mal_id} />
                ))}
            </Row>
          )}
        </Container>
      )}
      <button type='button' className='btn btn-success btn-circle btn-xl'>
        <i className='fa fa-search'></i>
      </button>
    </div>
  )
}

export default Home
