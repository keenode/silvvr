const React = require('react')
const Store = require('../../Store')
const { connector } = Store

class Navigation extends React.Component {
  render () {
    return (
      <nav className='admin-nav'>
        <p>Nav stuff</p>
      </nav>
    )
  }
}

module.exports = connector(Navigation)
