import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AnimeCard from '../Components/AnimeCard'
import useFetchSeason from '../Hooks/useFetchSeason'

function Home () {
  const [season, setSeason] = React.useState('winter')
  const [animes] = useFetchSeason(season)

  function winterSeason (e) {
    e.preventDefault()
    setSeason('winter')
  }

  function springSeason (e) {
    e.preventDefault()
    setSeason('spring')
  }

  function summerSeason (e) {
    e.preventDefault()
    setSeason('summer')
  }

  function fallSeason (e) {
    e.preventDefault()
    setSeason('fall')
  }

  return (
    <div>
      <hr />
      <div className='d-flex justify-content-center'>
        <h1>Seasonal Anime Database</h1>
      </div>
      <hr style={{ marginBottom: '0' }} />
      <Container fluid>
        <Row>
          <Col
            sm={3}
            className='text-center bg-primary'
            style={{ padding: '10px 16px' }}
          >
            <a href='winter' className='link-light' onClick={winterSeason}>
              Winter
            </a>
          </Col>
          <Col
            sm={3}
            className='text-center bg-success'
            style={{ padding: '10px 16px' }}
          >
            <a href='spring' className='link-light' onClick={springSeason}>
              Spring
            </a>
          </Col>
          <Col
            sm={3}
            className='text-center bg-warning'
            style={{ padding: '10px 16px' }}
          >
            <a href='summer' className='link-light' onClick={summerSeason}>
              Summer
            </a>
          </Col>
          <Col
            sm={3}
            className='text-center bg-danger'
            style={{ padding: '10px 16px' }}
          >
            <a href='fall' className='link-light' onClick={fallSeason}>
              Fall
            </a>
          </Col>
        </Row>
      </Container>
      <hr style={{ marginTop: '0' }} />
      <Container>
        <Row>
          {animes.map(anime => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

// class Home extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       animes: []
//     }
//   }

//   componentDidMount () {
//     fetch('https://api.jikan.moe/v3/season/2021/winter')
//       .then(res => res.json())
//       .then(({ anime }) => {
//         this.setState({
//           animes: anime
//         })
//       })
//   }

//   render () {
//     return (
//       <div>
//         <hr />
//         <div className='d-flex justify-content-center'>
//           <h1>Seasonal Anime Database</h1>
//         </div>
//         <hr />
//         <div className='container-sm'>
//           <div className='row'>
//             {this.state.animes.map(anime => (
//               <Card anime={anime} key={anime.mal_id} />
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default Home
