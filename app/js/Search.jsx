const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: 'this is the default searchTerm'
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }
  render () {
    return (
      <div className='container'>
        <Header handleSearchTermChange={this.handleSearchTermChange} showSearch searchTerm={this.state.searchTerm} />
        <div className='shows'>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} />
          ))}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = Search
