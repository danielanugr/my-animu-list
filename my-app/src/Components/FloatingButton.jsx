import './FloatingButton.css'
import { useHistory } from 'react-router-dom'

function FloatingButton () {
  const history = useHistory()
  function goToFavorites (e) {
    e.preventDefault()
    history.push('/favorites')
  }

  return (
    <button
      type='button'
      onClick={goToFavorites}
      className='btn btn-danger btn-circle btn-xl'
    >
      <i className='fa fa-heart'></i>
    </button>
  )
}

export default FloatingButton
