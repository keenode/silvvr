const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <img src={`/public/img/posters/${props.poster}`} className='show-card-img' />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.title}</h3>
      <h4 className='show-card-year'>({props.year})</h4>
      <p className='show-card-description'>{props.description}</p>
    </div>
  </div>
)

ShowCard.propTypes = {
  year: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
}

module.exports = ShowCard
