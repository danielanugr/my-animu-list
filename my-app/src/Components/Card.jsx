import React from 'react'

class Card extends React.Component {
  render () {
    const { anime } = this.props
    return (
      <div className='col-sm-3' style={{ marginBottom: '15px' }}>
        <div
          className='card shadow bg-white rounded'
          style={{ height: '600px' }}
        >
          <img
            src={anime.image_url}
            className='card-img-top'
            alt={anime.title}
            style={{ height: '350px' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{anime.title}</h5>
            <p className='card-text'>
              {anime.synopsis.substring(0, 125)}...
              <span>
                <a href='read'>read more</a>
              </span>
            </p>
          </div>
          <div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Score: <strong>{anime.score}/10</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
