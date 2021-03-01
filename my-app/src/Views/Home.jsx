import React from 'react'
import Card from '../Components/Card'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animeList: []
    }
  }

  componentDidMount () {
    fetch('https://api.jikan.moe/v3/season/2021/winter')
      .then(res => res.json())
      .then(({ anime }) => {
        this.setState({
          animeList: anime
        })
      })
  }

  render () {
    return (
      <div>
        <hr />
        <div className='d-flex justify-content-center'>
          <h1>Seasonal Anime Database</h1>
        </div>
        <hr />
        <div className='container-sm'>
          <div className='row'>
            {this.state.animeList.map(anime => (
              <Card anime={anime} key={anime.mal_id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
