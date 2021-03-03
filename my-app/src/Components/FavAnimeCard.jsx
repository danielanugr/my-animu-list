import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { useHistory } from 'react-router-dom'

import './AnimeCard.css'

function FavAnimeCard (props) {
  const { image_url, title, synopsis, score, mal_id } = props.anime
  const history = useHistory()

  function showDetail (id, e) {
    e.preventDefault()
    history.push(`/anime/${id}`)
  }

  return (
    <>
      <Col className='column' sm={3}>
        <Card className='shadow bg-white rounded'>
          <Card.Img
            className='image-card'
            variant='top'
            src={image_url}
            alt={title}
          />
          <Card.Body>
            <Card.Title
              className='card-title'
              style={
                title.length > 45
                  ? { fontSize: '0.975em' }
                  : { fontSize: '1.25em' }
              }
            >
              {title}
            </Card.Title>
            <Card.Text className='card-synopsis'>
              {synopsis.substring(0, 125)}...
              <span>
                <a href='readmore' onClick={e => showDetail(mal_id, e)}>
                  Read More
                </a>
              </span>
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem className='list-score'>
              Rating: <strong>{score}/10</strong>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </>
  )
}

export default FavAnimeCard
