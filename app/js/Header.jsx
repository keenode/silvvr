const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='Search' value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            kvideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  handleSearchTermChange: React.PropTypes.func,
  showSearch: React.PropTypes.bool,
  searchTerm: React.PropTypes.string
}

module.exports = Header
