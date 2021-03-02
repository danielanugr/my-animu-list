import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function AnimeCard (props) {
  const { anime } = props
  return (
    <Col sm={3} style={{ marginBottom: '15px' }}>
      <Card className='shadow bg-white rounded' style={{ height: '42em' }}>
        <Card.Img
          variant='top'
          src={anime.image_url}
          alt={anime.title}
          style={{ height: '23em' }}
        />
        <Card.Body>
          <Card.Title style={{ height: '3em', fontSize: '1.25em' }}>
            {anime.title}
          </Card.Title>
          <Card.Text style={{ height: '8em', fontSize: '1em' }}>
            {anime.synopsis.substring(0, 125)}...
            <span>
              <a href='readmore'>Read More</a>
            </span>
          </Card.Text>
          <ListGroup className='list-group-flush'>
            <ListGroupItem style={{ padding: '20px 0' }}>
              Rating: <strong>{anime.score}/10</strong>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  )
}

// class Card extends React.Component {
//   render () {
//     const { anime } = this.props
//     return (
//       <div className='col-sm-3' style={{ marginBottom: '15px' }}>
//         <div className='card shadow bg-white rounded'>
//           <img
//             src={anime.image_url}
//             className='card-img-top'
//             alt={anime.title}
//           />
//           <div className='card-body'>
//             <h5 className='card-title'>{anime.title}</h5>
//             <p className='card-text'>
//               {anime.synopsis.substring(0, 125)}...
//               <span>
//                 <a href='read'>read more</a>
//               </span>
//             </p>
//           </div>
//           <div>
//             <ul className='list-group list-group-flush'>
//               <li className='list-group-item'>
//                 Score: <strong>{anime.score}/10</strong>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default AnimeCard
